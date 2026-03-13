# Contact form backend (PHP)

Sends the website contact form to **info@skywareit.com** via SMTP (skywareit.com, port 465).

## Setup

1. **Install dependencies**
   ```bash
   cd php
   composer install
   ```

2. **Configure environment**
   - Copy `php/.env.example` to `php/.env`.
   - Set `MAIL_USERNAME` and `MAIL_PASSWORD` (e.g. info@skywareit.com and its password or app password).
   - Other values are pre-filled from your server details (skywareit.com, port 465, SSL).

3. **Frontend (Next.js)**  
   In the project root `.env.local` (or `.env`), set the URL of this script so the contact form can POST to it:
   ```env
   NEXT_PUBLIC_CONTACT_FORM_URL=https://your-domain.com/php/send-contact.php
   ```
   Replace `your-domain.com` with where you host the PHP (e.g. skywareit.com).

## Server details (from your .env)

- **Outgoing:** skywareit.com, SMTP port **465** (SSL)
- **Incoming:** IMAP 993, POP3 995 (not used by this script)

## Behaviour

- Accepts `POST` with fields: `full-name`, `email`, `subject`, `message`.
- Returns JSON: `{ "success": true }` or `{ "success": false, "error": "..." }`.
- Sends one email to `MAIL_TO` (default info@skywareit.com) with the form content.
