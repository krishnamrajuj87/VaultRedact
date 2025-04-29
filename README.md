# VaultRedact

A document redaction system designed for pharmaceutical companies to securely process and redact sensitive information from documents.

## Features

- Secure document upload and processing
- Customizable redaction templates and rules
- AI-enhanced sensitive information detection
- True content removal for PDF and DOCX files
- Redaction reports and verification tools
- User authentication and document management

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Firebase account for authentication and storage

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pharma-redact.git
cd pharma-redact
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables by creating a `.env.local` file in the root directory with:
```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Google AI/Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. Run the development server
```bash
npm run dev
```

## Deploying to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository

2. Visit [Vercel](https://vercel.com) and create a new project by importing your GitHub repository

3. Configure the environment variables in the Vercel project settings with the same variables from your `.env.local` file:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_GEMINI_API_KEY`

4. Deploy the project

5. Configure Firebase:
   - Enable Firebase Authentication (Google and Email/Password methods)
   - Set up Firebase Storage with CORS configuration from the `cors.json` file
   - Configure Firebase Security Rules for proper access control

## Firebase Configuration

### Authentication

Enable Email/Password and Google authentication methods in the Firebase Console.

### Storage Rules

Implement the storage rules from the `storage.rules` file in your Firebase Console to ensure secure document access.

### CORS Configuration

Apply the CORS configuration from the `cors.json` file to allow proper communication with Firebase Storage. Run:

```bash
gsutil cors set cors.json gs://your-firebase-storage-bucket
```

## Building for Production

```bash
npm run build
```

## Troubleshooting

If you encounter any deployment issues:

1. Make sure all environment variables are correctly set in Vercel
2. Ensure Firebase services (Auth, Firestore, Storage) are properly configured
3. Check that CORS is properly configured for Firebase Storage
4. Verify the Firebase Security Rules are permitting proper access
