const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
// const dotnev = require('dotnev')
// dotnev.config()

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 't0533146731@gmail.com',
        pass: '318992955'
    }
});

var mailOptions = {
    from: 't0533146731@gmail.com',
    to: '0533tamar0533@gmail.com',
    // to: 't0533146731@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'הצליח לשלוח מייל!!!!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
app.listen(3002, () => console.log("listening on port 3001"))