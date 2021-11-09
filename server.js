//imports for the env variables and packages
require('dotenv').config();
const port = process.env.PORT || 3000;
const personalEmail = process.env.PERSONAL_EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;
const friendEmail = process.env.FRIEND_EMAIL;
const express = require('express');
const app = express();
const nodeMailer = require('nodemailer');
const nodeCron = require('node-cron');

//messages for bot
const morningMsg = "Good morning! Hope you have a beautiful day!";
const birthdayMsg = "Happy Birthday! You rock!!!!";

//message objects
let sendMorningMsg = {
    from: personalEmail,
    to: friendEmail,
    cc: personalEmail,
    subject: "It's a beautiful morning",
    text: morningMsg
};

let sendBirthdayMsg = {
    from: personalEmail,
    to: friendEmail,
    cc: personalEmail,
    subject: "Hooray it's your Birthday",
    text: birthdayMsg
};

//transporter to send emails from our account 
let transporter = nodeMailer.createTransport({
    service: 'outlook',
    port: 587,
    secure: false,
    auth: {
        user: personalEmail,
        pass: emailPassword
    }
});


//verifies for a proper email connection 
transporter.verify((error) => {
    error ? console.log(`There was an error for the email connection: ${error}`) : console.log('Ready to send email')
});


//sends a morning message to our friend at 9am everyday
nodeCron.schedule("0 9 * * *", () => {
    async function morningMessage() {
        let info = await transporter.sendMail(sendMorningMsg)
        console.log(`Message send: ${info.messageId}`)
    }
    morningMessage().catch(console.error);
});

// sends a message once a year to our friend on their birthday 
nodeCron.schedule("0 11 17 April *", () => {
    async function birthdayMessage() {
        let info = await transporter.sendMail(sendBirthdayMsg)
        console.log(`Message send: ${info.messageId}`)
    }
    birthdayMessage().catch(console.error);
});

//listens for connections 
app.listen(port, () => {
    console.log(`The server has started at http://localhost:${port}`)
});
