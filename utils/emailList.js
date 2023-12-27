const subject = "Welcome to the Volunteer Team for Hack4FUTO 2.0!"

const text =
    `
Dear Volunteers, <br><br>

I hope this message finds you in good spirits. On behalf of the organizing team for Hack4FUTO 2.0, <br>
I am pleased to announce that your application to volunteer have been accepted. Welcome to the team! <br>

Your collective enthusiasm and commitment to being part of Hack4FUTO 2.0 are truly appreciated. <br>
Together, we can make a significant impact and create a memorable experience for all involved. <br><br>

Please join the group chat at your earliest convenience using the following link: <br> link <br><br>

Thank you for your dedication to our cause. We look forward to working together and creating memorable moments at Hack4FUTO 2.0.<br><br>

Best regards, <br><br>

Marshall Odii <br>
Convener Hack4FUTO 2.0.
`



const volunteers = process.env.volunteers

module.exports = { volunteers, text, subject }