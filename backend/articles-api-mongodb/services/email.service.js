const nodemailer = require("nodemailer");

class EmailService {
  static async sendEmail(subject, message, email) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PW,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: subject,
        text: message,
      });

      console.log("Email sent successfully");
    } catch (error) {
      console.log(error);
      //   throw new Error(error.message || "Failed to send email");
    }
  }
}

module.exports = EmailService;
