# WanderLux Backend Server

This is the backend server for the WanderLux travel website. It handles form submissions, email notifications, and file uploads.

## Features

- Contact form submissions with email notifications
- Booking request handling
- Gallery photo uploads
- Email confirmations for users
- Rate limiting and security measures
- File upload validation

## Setup

1. **Install dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration:**

   - Copy `.env.example` to `.env`
   - Fill in your email credentials:
     - Go to your Google Account settings
     - Enable 2-Factor Authentication
     - Generate an App Password for this application
     - Add the app password to EMAIL_PASS in .env

3. **Start the server:**
   ```bash
   npm run dev  # Development with nodemon
   # or
   npm start    # Production
   ```

## API Endpoints

### Contact Form

- **POST** `/api/contact`
- Sends emails to admin and confirmation to user
- Rate limited: 5 requests per minute per IP

### Booking Requests

- **POST** `/api/booking`
- Handles tour/destination booking requests
- Sends booking confirmations

### Gallery

- **POST** `/api/gallery/upload` - Upload photos (with form data)
- **GET** `/api/gallery` - Get all uploaded photos

### Health Check

- **GET** `/api/health` - Server status

## Security Features

- Helmet.js for security headers
- CORS protection
- Rate limiting
- Input validation and sanitization
- File upload restrictions (images only, 5MB max)

## Email Templates

The server includes professionally designed HTML email templates for:

- Contact form confirmations
- Booking confirmations
- Admin notifications

## File Structure

```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies
├── .env.example      # Environment variables template
├── uploads/          # Uploaded files directory
└── gallery.json      # Gallery data (use database in production)
```

## Production Notes

- Use a proper database instead of JSON files
- Set up proper file storage (AWS S3, etc.)
- Configure proper email service (SendGrid, etc.)
- Set up proper logging
- Use process manager like PM2
