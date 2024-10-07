import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    let errors = [];

    if (!name) {
      errors.push({ name: "Name is required" });
    }

    if (!email) {
      errors.push({ email: "Email is required" });
    }

    if (!message) {
      errors.push({ message: "Message is required" });
    }

    if (errors.length > 0) {
      return res.status(422).json(errors);
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_MAILHOST,
        port: process.env.NEXT_PUBLIC_MAILPORT,
        secure: process.env.NEXT_PUBLIC_MAILPORT, // true for 465, false for other ports
        auth: {
          user: process.env.NEXT_PUBLIC_MAILUSER, // Your email address
          pass: process.env.NEXT_PUBLIC_MAILPASSWORD, // Your password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: process.env.NEXT_PUBLIC_MAILUSER,
        to: process.env.NEXT_PUBLIC_MAILRECEIVER,
        subject: `New message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="text-align: center; color: #333;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #f2f2f2; border-bottom: 1px solid #ddd;">Name</th>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #f2f2f2; border-bottom: 1px solid #ddd;">Email</th>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #f2f2f2; border-bottom: 1px solid #ddd;">Message</th>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
              </tr>
            </table>
          </div>
        `,
        replyTo: email,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending mail", error);
          return res.status(500).json({ error: "Error sending mail" });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } catch (error) {
      console.log("Error sending mail", error);
      return res.status(500).json({ error: "Error sending mail" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
