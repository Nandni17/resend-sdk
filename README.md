# Resend TypeScript SDK

An unofficial TypeScript SDK for the [Resend API](https://resend.com), generated using [Voxgig SDK Generator](https://voxgig.com/sdk).

This project is not affiliated with or endorsed by Resend.

## Features

- TypeScript support
- Async/await API
- Email creation, listing, and retrieval
- Batch email operations
- API key authentication
- Generated entity-oriented client
- MIT license

## Requirements

- Node.js
- npm
- Resend API key

## Installation

Clone the repository:

```bash
git clone https://github.com/Nandni17/resend-sdk.git
cd resend-sdk/ts
npm install
```

## Authentication

Create an API key from your Resend dashboard.

Set it as an environment variable:

```env
RESEND_APIKEY=your_resend_api_key
```

Never commit your API key to Git.

## Usage

Import and initialize the SDK:

```ts
import { ResendSDK } from 'resend-sdk'

const client = new ResendSDK({
  apikey: process.env.RESEND_APIKEY,
})
```

## Send an email

```ts
async function sendEmail() {
  try {
    const email = await client.Email().create({
      from: 'Your Name <sender@yourdomain.com>',
      to: 'recipient@example.com',
      subject: 'Hello from Resend SDK',
      html: '<h1>Hello!</h1><p>This email was sent using the generated SDK.</p>',
    })

    console.log('Email response:', email.data())
  } catch (error) {
    console.error('Email sending failed:', error)
  }
}

sendEmail()
```

Use a sender address or domain verified in your Resend account.

## List emails

```ts
async function listEmails() {
  try {
    const emails = await client.Email().list({
      limit: 10,
    })

    console.log(emails.map(email => email.data()))
  } catch (error) {
    console.error('Unable to retrieve emails:', error)
  }
}
```

## Retrieve an email

```ts
async function getEmail(emailId: string) {
  try {
    const email = await client.Email().load({
      id: emailId,
    })

    console.log(email.data())
  } catch (error) {
    console.error('Unable to retrieve email:', error)
  }
}
```

## Testing

Compile the source and test files:

```bash
npx tsc --build src test
```

Run an individual compiled test:

```bash
node --test dist-test/entity/email/EmailEntity.test.js
```

## API Reference

Refer to the generated `REFERENCE.md` for available entities and operations.

## License

MIT
