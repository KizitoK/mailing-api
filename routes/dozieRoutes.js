const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendMail.js");

router.get("/", function (req, res) {
  res.send("Welcome to Dozie routes");
});

router.post("/sendMail", async (req, res) => {
  try {
    let { email, subject, textField, fullname, to } = req.body;
    textField = `
      <b> Mail from ${fullname} at ${email} </b>. <br>
      ${textField}
    `;
    await sendEmail(email, subject, textField, to);

    res.send({
      data: {},
      message: `Email sent successfully!`,
      status: 0,
    });
  } catch (error) {
    res.send({
      data: {},
      message: "Message not sent, An erroe was encountered!",
      status: 1,
    });
    console.log(error);
  }
});

module.exports = router;
