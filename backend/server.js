const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const validator = require("validator");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware with relaxed security for development
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false,
  })
);
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow localhost on any port for development
      if (origin.match(/^https?:\/\/localhost:\d+$/)) {
        return callback(null, true);
      }

      // Allow configured origins
      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:3000",
        process.env.FRONTEND_URL,
      ].filter(Boolean);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Email rate limiting (more strict)
const emailLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 email requests per minute
  message: "Too many email requests, please try again later.",
});

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only image files (JPEG, JPG, PNG, WEBP) are allowed!"));
    }
  },
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "faizanjaved246@gmail.com",
      pass: process.env.EMAIL_PASS, // You'll need to set this in .env file
    },
  });
};

// Utility function to validate email
const validateEmail = (email) => {
  return validator.isEmail(email);
};

// Utility function to sanitize input
const sanitizeInput = (input) => {
  return validator.escape(input.trim());
};

// Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Contact form submission
app.post("/api/contact", emailLimiter, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      travelDates,
      travelers,
      budget,
      message,
    } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields.",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : "",
      subject: sanitizeInput(subject || "general"),
      travelDates: sanitizeInput(travelDates || ""),
      travelers: sanitizeInput(travelers || "1"),
      budget: sanitizeInput(budget || ""),
      message: sanitizeInput(message),
    };

    const transporter = createTransporter();

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "faizanjaved246@gmail.com",
      to: "faizanjaved246@gmail.com",
      subject: `New Contact Form Submission - ${sanitizedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${
            sanitizedData.phone || "Not provided"
          }</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p><strong>Travel Dates:</strong> ${
            sanitizedData.travelDates || "Not specified"
          }</p>
          <p><strong>Number of Travelers:</strong> ${
            sanitizedData.travelers
          }</p>
          <p><strong>Budget Range:</strong> ${
            sanitizedData.budget || "Not specified"
          }</p>
          
          <h3>Message:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This message was sent from WanderLux contact form on ${new Date().toLocaleString()}
        </p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "faizanjaved246@gmail.com",
      to: sanitizedData.email,
      subject: "Thank you for contacting WanderLux - We'll be in touch soon!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">WanderLux</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Luxury Travel Experiences</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Thank you for reaching out!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Dear ${sanitizedData.name},
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              We've received your inquiry and are excited to help you plan your next adventure! 
              Our travel experts will review your request and get back to you within 24 hours.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Your Inquiry Details:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> ${
                sanitizedData.subject
              }</p>
              ${
                sanitizedData.travelDates
                  ? `<p style="margin: 5px 0; color: #666;"><strong>Travel Dates:</strong> ${sanitizedData.travelDates}</p>`
                  : ""
              }
              <p style="margin: 5px 0; color: #666;"><strong>Travelers:</strong> ${
                sanitizedData.travelers
              }</p>
              ${
                sanitizedData.budget
                  ? `<p style="margin: 5px 0; color: #666;"><strong>Budget:</strong> ${sanitizedData.budget}</p>`
                  : ""
              }
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore our website for inspiration, or contact us directly:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 5px 0; color: #666;"><strong>📞 Phone:</strong> +92 332 043 6737</p>
              <p style="margin: 5px 0; color: #666;"><strong>✉️ Email:</strong> faizanjaved246@gmail.com</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for choosing WanderLux for your travel needs. We look forward to creating unforgettable memories with you!
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The WanderLux Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} WanderLux. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again later.",
    });
  }
});

// Booking form submission
app.post("/api/booking", emailLimiter, async (req, res) => {
  try {
    const {
      packageName,
      packagePrice,
      name,
      email,
      phone,
      travelDates,
      travelers,
      specialRequests,
    } = req.body;

    // Validation
    if (!packageName || !name || !email || !travelDates || !travelers) {
      return res.status(400).json({
        success: false,
        message:
          "Package name, name, email, travel dates, and number of travelers are required.",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      packageName: sanitizeInput(packageName),
      packagePrice: sanitizeInput(packagePrice || ""),
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : "",
      travelDates: sanitizeInput(travelDates),
      travelers: sanitizeInput(travelers),
      specialRequests: specialRequests ? sanitizeInput(specialRequests) : "",
    };

    const transporter = createTransporter();

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "faizanjaved246@gmail.com",
      to: "faizanjaved246@gmail.com",
      subject: `New Booking Request - ${sanitizedData.packageName}`,
      html: `
        <h2>New Booking Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h3>Package Details:</h3>
          <p><strong>Package:</strong> ${sanitizedData.packageName}</p>
          <p><strong>Price:</strong> ${
            sanitizedData.packagePrice || "Not specified"
          }</p>
          
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${
            sanitizedData.phone || "Not provided"
          }</p>
          <p><strong>Travel Dates:</strong> ${sanitizedData.travelDates}</p>
          <p><strong>Number of Travelers:</strong> ${
            sanitizedData.travelers
          }</p>
          
          ${
            sanitizedData.specialRequests
              ? `
          <h3>Special Requests:</h3>
          <div style="background-color: white; padding: 15px; border-radius: 5px;">
            <p>${sanitizedData.specialRequests.replace(/\n/g, "<br>")}</p>
          </div>
          `
              : ""
          }
        </div>
        
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This booking request was submitted on ${new Date().toLocaleString()}
        </p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "faizanjaved246@gmail.com",
      to: sanitizedData.email,
      subject: `Booking Confirmation - ${sanitizedData.packageName}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">WanderLux</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Booking Confirmation</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Thank you for your booking!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Dear ${sanitizedData.name},
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              We've received your booking request for <strong>${
                sanitizedData.packageName
              }</strong>. 
              Our team is now preparing your personalized itinerary and will contact you within 24 hours to confirm all details.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Booking Summary:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Package:</strong> ${
                sanitizedData.packageName
              }</p>
              ${
                sanitizedData.packagePrice
                  ? `<p style="margin: 5px 0; color: #666;"><strong>Price:</strong> ${sanitizedData.packagePrice}</p>`
                  : ""
              }
              <p style="margin: 5px 0; color: #666;"><strong>Travel Dates:</strong> ${
                sanitizedData.travelDates
              }</p>
              <p style="margin: 5px 0; color: #666;"><strong>Travelers:</strong> ${
                sanitizedData.travelers
              }</p>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Our travel specialists will reach out to you soon to finalize payment options, travel arrangements, and any special accommodations.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 5px 0; color: #666;"><strong>📞 Phone:</strong> +92 332 043 6737</p>
              <p style="margin: 5px 0; color: #666;"><strong>✉️ Email:</strong> faizanjaved246@gmail.com</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              We're excited to help you create unforgettable memories!
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The WanderLux Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message:
        "Booking request submitted successfully! We'll contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Booking form error:", error);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error processing your booking. Please try again later.",
    });
  }
});

// Gallery photo upload (supports multiple files)
app.post(
  "/api/gallery/upload",
  upload.array("photos", 10),
  async (req, res) => {
    try {
      console.log("Upload request received:");
      console.log("Files:", req.files ? req.files.length : 0);
      console.log("Body:", req.body);

      if (!req.files || req.files.length === 0) {
        console.log("No files uploaded");
        return res.status(400).json({
          success: false,
          message: "Please select at least one photo to upload.",
        });
      }

      const { title, location, description, category } = req.body;

      if (!title || !location) {
        console.log("Missing required fields:", { title, location });
        return res.status(400).json({
          success: false,
          message: "Title and location are required.",
        });
      }

      // Read existing gallery data
      const galleryFile = path.join(__dirname, "gallery.json");
      let galleryData = [];

      if (fs.existsSync(galleryFile)) {
        const fileContent = fs.readFileSync(galleryFile, "utf8");
        try {
          galleryData = JSON.parse(fileContent);
        } catch (e) {
          galleryData = [];
        }
      }

      // Process each uploaded file
      const uploadedPhotos = req.files.map((file, index) => {
        const photoData = {
          id: uuidv4(),
          filename: file.filename,
          originalName: file.originalname,
          title:
            index === 0
              ? sanitizeInput(title)
              : `${sanitizeInput(title)} ${index + 1}`,
          location: sanitizeInput(location),
          category: category || "destinations",
          description: description ? sanitizeInput(description) : "",
          uploadDate: new Date().toISOString(),
          src: `/api/uploads/${file.filename}`, // URL path for frontend
          type: "image",
        };

        galleryData.push(photoData);
        return photoData;
      });

      fs.writeFileSync(galleryFile, JSON.stringify(galleryData, null, 2));

      res.status(200).json({
        success: true,
        message: `${uploadedPhotos.length} photo(s) uploaded successfully!`,
        data: uploadedPhotos,
      });
    } catch (error) {
      console.error("Gallery upload error:", error);
      res.status(500).json({
        success: false,
        message:
          "Sorry, there was an error uploading your photos. Please try again later.",
      });
    }
  }
);

// Get gallery photos
app.get("/api/gallery", (req, res) => {
  try {
    const galleryFile = path.join(__dirname, "gallery.json");
    let galleryData = [];

    if (fs.existsSync(galleryFile)) {
      const fileContent = fs.readFileSync(galleryFile, "utf8");
      try {
        galleryData = JSON.parse(fileContent);
      } catch (e) {
        galleryData = [];
      }
    }

    // Add full URL to photos
    const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
    const photosWithUrls = galleryData.map((photo) => ({
      ...photo,
      imageUrl: `${baseUrl}/api/uploads/${photo.filename}`,
    }));

    res.status(200).json({
      success: true,
      data: photosWithUrls,
    });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching gallery photos.",
    });
  }
});

// Serve uploaded files
// Static file serving with enhanced CORS headers for uploaded images
app.use(
  "/api/uploads",
  (req, res, next) => {
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "http://localhost:3000",
    ];

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
    }

    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    res.header("Cross-Origin-Embedder-Policy", "unsafe-none");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    next();
  },
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, path, stat) => {
      res.set("Cache-Control", "public, max-age=31536000");
    },
  })
);

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File too large. Maximum size is 5MB.",
      });
    }
  }

  console.error("Server error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(
    `📧 Make sure to set EMAIL_PASS in your .env file for email functionality`
  );
});
