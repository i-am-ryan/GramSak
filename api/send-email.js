// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, company, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Gramsak Website <onboarding@resend.dev>', // Using Resend's test domain
      to: ['admin@gramsak.co.za'],
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 16px;">From Gramsak Engineering Website</p>
          </div>
          
          <!-- Contact Information -->
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #10b981;">
            <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555; width: 30%; vertical-align: top;">
                  <span style="display: inline-block; width: 20px;">👤</span> Name:
                </td>
                <td style="padding: 12px 0; color: #333; font-size: 16px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">
                  <span style="display: inline-block; width: 20px;">📧</span> Email:
                </td>
                <td style="padding: 12px 0; color: #333;">
                  <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 500;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">
                  <span style="display: inline-block; width: 20px;">📱</span> Phone:
                </td>
                <td style="padding: 12px 0; color: #333;">
                  <a href="tel:${phone}" style="color: #10b981; text-decoration: none; font-weight: 500;">${phone}</a>
                </td>
              </tr>` : ''}
              ${company ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">
                  <span style="display: inline-block; width: 20px;">🏢</span> Company:
                </td>
                <td style="padding: 12px 0; color: #333; font-weight: 500;">${company}</td>
              </tr>` : ''}
            </table>
          </div>
          
          <!-- Message Content -->
          <div style="background: #fff; padding: 25px; border: 1px solid #e9ecef; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">
              <span style="display: inline-block; width: 20px; margin-right: 8px;">💬</span>Project Details & Message
            </h2>
            <div style="color: #555; line-height: 1.7; font-size: 15px; white-space: pre-wrap; background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981;">${message}</div>
          </div>
          
          <!-- Quick Actions -->
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Quick Actions</h3>
            <div style="display: inline-block; margin: 0 10px;">
              <a href="mailto:${email}" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: 500; display: inline-block;">
                📧 Reply via Email
              </a>
            </div>
            ${phone ? `
            <div style="display: inline-block; margin: 0 10px;">
              <a href="tel:${phone}" style="background: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: 500; display: inline-block;">
                📱 Call ${firstName}
              </a>
            </div>` : ''}
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <div style="margin-bottom: 15px;">
              <img src="https://gram-sak.vercel.app/favicon.ico" alt="Gramsak" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 10px;">
              <span style="color: #10b981; font-weight: bold; font-size: 18px; vertical-align: middle;">Gramsak Engineering</span>
            </div>
            <p style="color: #888; font-size: 14px; margin: 5px 0;">
              This email was sent from the Gramsak website contact form
            </p>
            <p style="color: #888; font-size: 14px; margin: 5px 0;">
              📅 Submitted: ${new Date().toLocaleString('en-ZA', { 
                timeZone: 'Africa/Johannesburg',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} (SAST)
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e9ecef;">
              <p style="color: #10b981; font-size: 12px; margin: 0; font-weight: 500;">
                🌟 Level 1 B-BBEE | Electrical & Mechanical Engineering Excellence
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ message: 'Failed to send email', error: error.message });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Email sent successfully!', id: data.id });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}