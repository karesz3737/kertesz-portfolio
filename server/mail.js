require("dotenv").config();
const mailGun = require("nodemailer-mailgun-transport");
const express = require("express");
const nodemailer = require("nodemailer");
// const auth = {
//   auth: {
//     api_key: process.env.API_KEY,
//     domain: process.env.DOMAIN_KEY,
//   },
// };

var transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: process.env.us,
    pass: process.env.PASSWORD,
  },
});

module.exports = SendUserEmail = (email, subject, text, name, cb) => {
  const mailOptions = {
    from: process.env.us,
    to: process.env.EMAIL_KEY,
    subject: "email from kerteszk.net",
    html: `<b>Sender: ${name}</b>
    <b>Email: ${email}</b>
    <b>subject: ${subject}</b>
    <b>Message: ${text}</b> 
    `,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, info);
    }
  });
  // transport.sendMail(mailOptionsTwo, (err, info) => {
  //   if (err) {
  //     cb(err, null);
  //   } else {
  //     cb(null, info);
  //   }
  // });
};
