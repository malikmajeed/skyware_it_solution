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
   The contact form posts to **`/api/contact`** (same origin). That API route forwards to this PHP script.  
   In the project root `.env.local` (or `.env`), set the **server-side** URL of this script (no `NEXT_PUBLIC_`):
   ```env
   CONTACT_FORM_URL=https://your-domain.com/php/send-contact.php
   ```
   Replace `your-domain.com` with where you host the PHP (e.g. skywareit.com). The build has no client-side dependency on this; routing works with the built app.

## Server details (from your .env)

- **Outgoing:** skywareit.com, SMTP port **465** (SSL)
- **Incoming:** IMAP 993, POP3 995 (not used by this script)

## Behaviour

- Accepts `POST` with fields: `full-name`, `email`, `subject`, `message`.
- Returns JSON: `{ "success": true }` or `{ "success": false, "error": "..." }`.
- Sends one email to `MAIL_TO` (default info@skywareit.com) with the form content.
