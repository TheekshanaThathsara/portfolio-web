Netlify Functions: send-email

This project includes a Netlify Function at `netlify/functions/send-email.js` which sends incoming contact form submissions to `thathsaragpht@gmail.com` using SendGrid.

Setup
1. Create a SendGrid account and get an API key with `Mail Send` permissions.
2. In your Netlify site settings, add an environment variable:
   - `SENDGRID_API_KEY` = your_sendgrid_api_key
3. Deploy the site to Netlify (functions run only on Netlify). The contact form will POST to `/.netlify/functions/send-email`.

Local testing
- You can test functions locally with Netlify CLI (`netlify dev`) after installing Netlify CLI and adding a local `.env` with `SENDGRID_API_KEY`.

Fallback
- If the function call fails (or when running locally without the function), the UI falls back to opening the user's mail client with a pre-filled mailto to `thathsaragpht@gmail.com`.
