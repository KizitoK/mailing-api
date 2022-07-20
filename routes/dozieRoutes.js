const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendMail.js");

router.get("/", function (req, res) {
  res.send("Welcome to Dozie routes");
});

router.post("/sendMail", async (req, res) => {
  try {
    let { email, subject, text, fullname } = req.body;
    text = `Mail from ${fullname} at ${email}. ${subject} `;
    await sendEmail(email, subject, text);

    res.send({
      data: {},
      message: `Email sent successfully!`,
      status: 0,
    });
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

module.exports = router;
