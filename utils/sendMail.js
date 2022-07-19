const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
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
      to: "kelechikizito4@gmail.com",
      subject: subject,
      //Adding HTML and Text Version, so the email will not land up in the spam folder
      html: text,
      text: text,
    });

    console.log("email sent successfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
