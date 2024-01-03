const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, textField, to) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.pass,
      },
    });

    await transporter.sendMail({
      sender: email,
      to: to,
      subject: subject,
      //Adding HTML and Text Version, so the email will not land up in the spam folder
      html: textField,
      text: textField,
    });

    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
