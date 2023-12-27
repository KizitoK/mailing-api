const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendMail.js");
const { volunteers, subject, text } = require("../utils/emailList.js")


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

router.post("/sendBulkMail", async (req, res) => {
  try {
    for (let i = 0; i < volunteers.length; i++) {
      const email = volunteers[i]
      let textField = text
      await sendEmail(email, subject, textField, email);
      console.log(`To: ${email}`)
    }

    // let { email, subject, textField, to } = req.body;
    // textField = `
    //   <b> Mail from ${email} </b>. <br>
    //   ${textField}
    // `;
    // await sendEmail(email, subject, textField, to);

    res.send({
      data: {},
      message: `Email sent successfully!`,
      status: 0,
    });
  } catch (error) {
    res.send({
      data: {},
      message: "Message not sent, An error was encountered!",
      status: 1,
    });
    console.log(error);
  }
});

module.exports = router;
