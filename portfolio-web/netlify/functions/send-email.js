const fetch = require('node-fetch');

// This Netlify Function uses SendGrid to send email.
// Set SENDGRID_API_KEY in Netlify environment variables.

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name = 'Website Visitor', email = '', message = '' } = data;

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      return {
        statusCode: 500,
        body: 'SendGrid API key not configured',
      };
    }

    const payload = {
      personalizations: [
        {
          to: [{ email: 'thathsaragpht@gmail.com' }],
          subject: `New message from ${name}`,
        },
      ],
      from: { email: 'no-reply@thathsara.dev', name: 'Portfolio Website' },
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        },
      ],
    };

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: res.status || 500,
        body: text || 'Failed to send email',
      };
    }

    return {
      statusCode: 200,
      body: 'Email sent',
    };
  } catch (err) {
    console.error('send-email error', err);
    return {
      statusCode: 500,
      body: 'Server error',
    };
  }
};
