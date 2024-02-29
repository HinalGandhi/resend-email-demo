# Resend with React Email

This example show how to send Resend emails with React Email.

## How to run

### 1. Install the dependencies

```bash
npm i
```

### 2. Create a `.env` file at the root and add your Resend API

```bash
RESEND_API_KEY=YOUR_API_KEY
```

### 3. Run the server

```bash
npm run dev
```

### 4. Update the `from` and `to` in the `action.js`

You can update the `from` and `to` here so send from your own domain and to your email address. The `to` must be a verified `domain` in your account.

```jsx
const data = await resend.emails.send({
  from: "Thanks for contacting us<hinal.resend@resend.dev>",
  to: "hinal.resend@resend.dev>",
  subject: "Welcome to Black Panther 🚀",
  reply_to: email,
  // attachments: [
  //   {
  //     path: 'path/to/file/invoice.pdf',
  //     filename: 'invoice.pdf',
  //   },
  // ],
  react: EmailTemplate({ name, email, message, phone }),
});
```
