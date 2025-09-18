# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to https://emailjs.com
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (thathsaragpht@gmail.com)
5. Copy the Service ID (starts with "service_")

## Step 3: Create Email Template
1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - Subject: "New message from {{from_name}}"
   - Content: 
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
4. Save and copy the Template ID (starts with "template_")

## Step 4: Get Public Key
1. Go to "Account" > "General" in your EmailJS dashboard
2. Copy your Public Key

## Step 5: Update .env File
Update your `.env` file with the actual values:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxx
```

## Step 6: Test
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Submit the form - you should receive an email at thathsaragpht@gmail.com

## Note
- EmailJS free plan allows 200 emails per month
- If EmailJS fails, the form will automatically open your default mail client as a fallback
- Make sure to keep your `.env` file in `.gitignore` to protect your keys