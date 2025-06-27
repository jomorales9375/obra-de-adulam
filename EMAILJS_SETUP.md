# 📧 EmailJS Setup Guide - Fix 400 Bad Request Error

## 🔧 Quick Fix Steps

### 1. Create Environment File
Create a `.env` file in your project root with your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 2. Get Your EmailJS Credentials

#### Step 1: Sign up at EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create a free account
3. Verify your email

#### Step 2: Create Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Copy the Service ID** (looks like: `service_abc123`)

#### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Design your email template
4. **Use these template variables** (copy exactly):
   ```
   {{name}}
   {{email}}
   {{phone}}
   {{requestType}}
   {{prayerRequest}}
   {{time}}
   ```
5. **Copy the Template ID** (looks like: `template_xyz789`)

#### Step 4: Get Public Key
1. Go to **Account** → **API Keys**
2. **Copy your Public Key** (looks like: `user_def456`)

### 3. Update Your .env File
Replace the placeholder values with your actual credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=user_def456
```

### 4. Restart Your Development Server
```bash
npm start
```

## 🐛 Debugging the 400 Error

### Check Console Logs
The updated code now provides detailed console logs. Check your browser's developer console for:

1. **EmailJS Configuration**: Shows if credentials are loaded
2. **Data Being Sent**: Shows exactly what data is sent to EmailJS
3. **Error Details**: Shows specific error information

### Common Issues & Solutions

#### Issue 1: "Credentials not configured"
**Solution**: Your `.env` file is missing or has wrong values

#### Issue 2: "Error 400: Template variables don't match"
**Solution**: Your EmailJS template variables don't match the data being sent

**Template should have these variables:**
```
{{name}} - User's name
{{email}} - User's email
{{phone}} - User's phone (or "No proporcionado")
{{requestType}} - Type of prayer request
{{prayerRequest}} - The prayer request message
{{time}} - Timestamp
```

#### Issue 3: "Error 401: Invalid public key"
**Solution**: Check your public key in the EmailJS dashboard

#### Issue 4: "Error 404: Service/Template not found"
**Solution**: Verify your Service ID and Template ID

## 📋 EmailJS Template Example

Here's a complete template you can use:

**Subject:** Nueva Petición de Oración - {{requestType}}

**Body:**
```
Hola,

Has recibido una nueva petición de oración:

**Información del Contacto:**
- Nombre: {{name}}
- Email: {{email}}
- Teléfono: {{phone}}
- Tipo de Petición: {{requestType}}

**Petición de Oración:**
{{prayerRequest}}

**Fecha y Hora:**
{{time}}

Por favor, ora por esta persona y contacta si es necesario.

Bendiciones,
Sistema de Peticiones de Oración
Obra de Adulam
```

## 🔍 Testing Your Setup

1. **Fill out the prayer request form**
2. **Check browser console** for detailed logs
3. **Look for success message** or specific error
4. **Check your email** for the prayer request

## 🚨 Important Notes

- **Never commit your `.env` file** to version control
- **Restart your development server** after changing `.env`
- **Template variables are case-sensitive**
- **Free EmailJS plan** allows 200 emails/month
- **Check spam folder** if emails don't arrive

## 📞 Need Help?

If you're still getting errors:

1. **Check the console logs** for specific error messages
2. **Verify your EmailJS template** has the correct variables
3. **Ensure your service is active** in EmailJS dashboard
4. **Try the test email** feature in EmailJS dashboard

## 🔄 Alternative: Use EmailJS Test Template

If you want to test quickly, use EmailJS's built-in test template:

1. Go to **Email Templates**
2. Click **Create New Template**
3. Choose **"Blank Template"**
4. Use this simple template:

```
Name: {{name}}
Email: {{email}}
Message: {{message}}
Time: {{time}}
```

This uses the basic variables that are always sent.

---

**Last Updated**: January 2025
**Status**: ✅ Ready to fix 400 errors 