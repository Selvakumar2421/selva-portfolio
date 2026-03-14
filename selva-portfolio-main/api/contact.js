const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Debug: log what we're receiving
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);

    // Get form data - handle both JSON and form data
    let formData = {};
    
    if (req.body) {
      formData = req.body;
    } else {
      return res.status(400).json({
        success: false,
        message: 'No data received'
      });
    }

    // Extract form fields safely
    const name = formData.name || '';
    const email = formData.email || '';
    const phone = formData.phone || '';
    const company = formData.company || '';
    const projectType = formData['project-type'] || '';
    const customProjectType = formData['custom-project-type'] || '';
    const budget = formData.budget || '';
    const timeline = formData.timeline || '';
    const message = formData.message || '';

    console.log('Extracted data:', { name, email, message });

    // Use custom project type if "other" was selected
    const finalProjectType = projectType === 'other' && customProjectType ? customProjectType : projectType;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'selvakumar0954@gmail.com',
        pass: process.env.EMAIL_PASS || 'ngvk kcoy zhpj uggm'
      }
    });

    // Create email content
    const subject = `New Contact Form Submission - ${name}`;
    
    let htmlBody = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background-color: #e2ff31; color: #000; padding: 30px 20px; text-align: center; }
          .content { padding: 30px 20px; }
          .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 8px; padding: 12px; background-color: #f9f9f9; }
        </style>
      </head>
      <body>
        <div class='container'>
          <div class='header'>
            <h1>New Contact Form Submission</h1>
          </div>
          <div class='content'>
            <div class='field'>
              <div class='label'>Name:</div>
              <div class='value'>${name}</div>
            </div>
            <div class='field'>
              <div class='label'>Email:</div>
              <div class='value'>${email}</div>
            </div>
    `;

    if (phone) {
      htmlBody += `
            <div class='field'>
              <div class='label'>Phone:</div>
              <div class='value'>${phone}</div>
            </div>
      `;
    }

    if (company) {
      htmlBody += `
            <div class='field'>
              <div class='label'>Company:</div>
              <div class='value'>${company}</div>
            </div>
      `;
    }

    if (finalProjectType) {
      htmlBody += `
            <div class='field'>
              <div class='label'>Project Type:</div>
              <div class='value'>${finalProjectType}</div>
            </div>
      `;
    }

    if (budget) {
      htmlBody += `
            <div class='field'>
              <div class='label'>Budget:</div>
              <div class='value'>${budget}</div>
            </div>
      `;
    }

    if (timeline) {
      htmlBody += `
            <div class='field'>
              <div class='label'>Timeline:</div>
              <div class='value'>${timeline}</div>
            </div>
      `;
    }

    htmlBody += `
            <div class='field'>
              <div class='label'>Message:</div>
              <div class='value'>${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'selvakumar0954@gmail.com',
      to: process.env.EMAIL_USER || 'selvakumar0954@gmail.com',
      replyTo: email,
      subject: subject,
      html: htmlBody
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    });
  }
}