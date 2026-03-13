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

3. **Deploy to hosting root**  
   Upload `send-contact.php`, the `vendor/` folder (after `composer install`), and `php/.env` to your **hosting root** (e.g. `public_html/` on Namecheap). So the script is at `https://yourdomain.com/send-contact.php`.

4. **Frontend (static / no-Node hosting)**  
   The contact form POSTs **directly** to this PHP URL. Before building the static site, set in the project root `.env` or `.env.local`:
   ```env
   NEXT_PUBLIC_CONTACT_FORM_URL=https://yourdomain.com/send-contact.php
   ```
   Replace `yourdomain.com` with your real domain (e.g. skywareit.com). Then run `npm run build`; the value is baked into the static output.

## Server details (from your .env)

- **Outgoing:** skywareit.com, SMTP port **465** (SSL)
- **Incoming:** IMAP 993, POP3 995 (not used by this script)

## Behaviour

- Accepts `POST` with fields: `full-name`, `email`, `subject`, `message`.
- Returns JSON: `{ "success": true }` or `{ "success": false, "error": "..." }`.
- Sends one email to `MAIL_TO` (default info@skywareit.com) with the form content.
