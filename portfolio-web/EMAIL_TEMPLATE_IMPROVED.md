# Simple & Reliable EmailJS Template

## Why Complex Templates Don't Work

Gmail, Outlook, and other email clients strip out:
- CSS gradients
- Advanced positioning (flexbox, grid)
- Border-radius in some cases
- Box shadows
- Complex nested divs

The table-based template above uses only basic HTML that works everywhere.

## Troubleshooting Steps

1. **Copy the table-based template above** - it's specifically designed for email clients
2. **In EmailJS dashboard:**
   - Go to Email Templates
   - Edit template `template_tzgfs6h`
   - **DELETE all existing content**
   - Paste the new table-based template
   - Save

3. **Test immediately:**
   - Send a test message from your contact form
   - Check your inbox - it should now display properly

4. **If still not working, try the simple text version below**

## Backup: Simple Text Template (Always Works)

If HTML still doesn't display correctly, use this plain text version:

### 1. Go to your EmailJS dashboard
- Navigate to Email Templates
- Edit your existing template (template_tzgfs6h)

### 2. Simple Template That Works

**Subject Line:**
```
New Portfolio Message from {{from_name}}
```

**Email Content (Gmail-Compatible HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0; padding: 0;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <!-- Header -->
        <tr>
            <td style="background-color: #4f46e5; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 20px;">📧 New Portfolio Message</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px;">thathsara.netlify.app</p>
            </td>
        </tr>
        
        <!-- Content -->
        <tr>
            <td style="padding: 20px; background-color: #ffffff;">
                
                <!-- Welcome Message -->
                <p style="color: #333333; font-size: 16px; margin: 0 0 20px 0;">
                    A message by <strong>{{from_name}}</strong> has been received. Kindly respond at your earliest convenience.
                </p>
                
                <!-- Contact Info -->
                <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f8f9fa; border: 1px solid #dee2e6; margin-bottom: 20px;">
                    <tr>
                        <td style="width: 60px; vertical-align: top;">
                            <div style="width: 40px; height: 40px; background-color: #4f46e5; border-radius: 20px; text-align: center; line-height: 40px; font-size: 20px; color: white;">👤</div>
                        </td>
                        <td style="vertical-align: top;">
                            <p style="margin: 0 0 5px 0; font-size: 16px; color: #333;"><strong>From:</strong> {{from_name}}</p>
                            <p style="margin: 0 0 5px 0; font-size: 16px; color: #333;"><strong>Email:</strong> {{from_email}}</p>
                            <p style="margin: 0; font-size: 12px; color: #666;">{{timestamp}}</p>
                        </td>
                    </tr>
                </table>
                
                <!-- Message -->
                <table width="100%" cellpadding="15" cellspacing="0" style="background-color: #ffffff; border: 1px solid #dee2e6; margin-bottom: 20px;">
                    <tr>
                        <td>
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #666; text-transform: uppercase;">MESSAGE</p>
                            <p style="margin: 0; font-size: 16px; color: #333; line-height: 1.5; white-space: pre-line;">{{message}}</p>
                        </td>
                    </tr>
                </table>
                
                <!-- Reply Button -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                    <tr>
                        <td style="text-align: center;">
                            <a href="mailto:{{reply_to}}?subject=Re: Your Portfolio Contact Message" 
                               style="display: inline-block; background-color: #4f46e5; color: white; text-decoration: none; padding: 12px 20px; border-radius: 4px; font-size: 14px;">
                                📧 Reply to {{from_name}}
                            </a>
                        </td>
                    </tr>
                </table>
                
                <!-- Tip -->
                <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #d1fae5; border-left: 4px solid #10b981;">
                    <tr>
                        <td>
                            <p style="margin: 0; font-size: 13px; color: #065f46;">
                                <strong>💡 Tip:</strong> You can reply directly to this email or use the button above.
                            </p>
                        </td>
                    </tr>
                </table>
                
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style="background-color: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #dee2e6;">
                <p style="margin: 0; color: #666; font-size: 12px;">
                    Sent via Portfolio Contact Form<br>
                    <strong>thathsara.netlify.app</strong>
                </p>
            </td>
        </tr>
    </table>
    
</div>
```

### 3. EmailJS Settings

**Reply-To Email:**
```
{{reply_to}}
```

**From Name:**
```
Portfolio Website
```

## Alternative: Even Simpler Text Template

If the HTML still doesn't work, use this plain text version:

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Content:**
```
📧 NEW PORTFOLIO CONTACT MESSAGE
================================

👤 FROM: {{from_name}}
📧 EMAIL: {{from_email}}

💬 MESSAGE:
{{message}}

---
Reply directly to this email to respond.
Sent via Portfolio Contact Form - thathsara.netlify.app
```