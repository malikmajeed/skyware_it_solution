<?php
/**
 * Contact form handler – sends to info@skywareit.com via SMTP (skywareit.com:465).
 * Expects POST: full_name or full-name, email, subject, message.
 * Returns JSON: { "success": true } or { "success": false, "error": "..." }
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Load .env from this directory or parent
$envPaths = [__DIR__ . '/.env', __DIR__ . '/../.env'];
$loaded = false;
foreach ($envPaths as $path) {
    if (file_exists($path) && is_readable($path)) {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            if (preg_match('/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/', $line, $m)) {
                $_ENV[trim($m[1])] = trim($m[2], " \t\"'");
            }
        }
        $loaded = true;
        break;
    }
}

if (!$loaded) {
    echo json_encode(['success' => false, 'error' => 'Server configuration error: .env not found']);
    exit;
}

$getEnv = function ($key, $default = '') {
    return isset($_ENV[$key]) ? $_ENV[$key] : $default;
};

$host     = $getEnv('MAIL_HOST', 'skywareit.com');
$port     = (int) $getEnv('MAIL_PORT', '465');
$secure   = $getEnv('MAIL_SECURE', 'ssl');
$username = $getEnv('MAIL_USERNAME');
$password = $getEnv('MAIL_PASSWORD');
$fromMail = $getEnv('MAIL_FROM_EMAIL', 'info@skywareit.com');
$fromName = $getEnv('MAIL_FROM_NAME', 'Skyware IT Solutions');
$toMail   = $getEnv('MAIL_TO', 'info@skywareit.com');

if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'error' => 'Server configuration error: mail credentials not set']);
    exit;
}

// Normalize input: support both "full-name" and "full_name"
$fullName = isset($_POST['full_name']) ? trim((string) $_POST['full_name']) : (isset($_POST['full-name']) ? trim((string) $_POST['full-name']) : '');
$email    = isset($_POST['email']) ? trim((string) $_POST['email']) : '';
$subject  = isset($_POST['subject']) ? trim((string) $_POST['subject']) : '';
$message  = isset($_POST['message']) ? trim((string) $_POST['message']) : '';

// Optional: accept JSON body
if (empty($email) && !empty(file_get_contents('php://input'))) {
    $json = json_decode(file_get_contents('php://input'), true);
    if (is_array($json)) {
        $fullName = isset($json['full_name']) ? trim((string) $json['full_name']) : (isset($json['fullName']) ? trim((string) $json['fullName']) : $fullName);
        $email    = isset($json['email']) ? trim((string) $json['email']) : $email;
        $subject  = isset($json['subject']) ? trim((string) $json['subject']) : $subject;
        $message  = isset($json['message']) ? trim((string) $json['message']) : $message;
    }
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'A valid email address is required']);
    exit;
}

$subjectLine = $subject !== '' ? $subject : 'Contact form submission from Skyware website';
$bodyPlain  = "Contact form submission\n\n";
$bodyPlain .= "Name: " . ($fullName !== '' ? $fullName : '(not provided)') . "\n";
$bodyPlain .= "Email: " . $email . "\n";
$bodyPlain .= "Subject: " . ($subject !== '' ? $subject : '(not provided)') . "\n\n";
$bodyPlain .= "Message / Goal:\n" . ($message !== '' ? $message : '(not provided)') . "\n";

$bodyHtml = '<p><strong>Name:</strong> ' . htmlspecialchars($fullName ?: '(not provided)') . '</p>';
$bodyHtml .= '<p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>';
$bodyHtml .= '<p><strong>Subject:</strong> ' . htmlspecialchars($subject ?: '(not provided)') . '</p>';
$bodyHtml .= '<p><strong>Message / Goal:</strong></p><p>' . nl2br(htmlspecialchars($message ?: '(not provided)')) . '</p>';

try {
    require __DIR__ . '/vendor/autoload.php';

    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $username;
    $mail->Password   = $password;
    $mail->SMTPSecure = $secure === 'tls' ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $port;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($fromMail, $fromName);
    $mail->addAddress($toMail);
    $mail->Subject = $subjectLine;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyPlain;
    $mail->isHTML(true);

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => 'Failed to send message. Please try again or email us directly.']);
}
