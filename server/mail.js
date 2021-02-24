require("dotenv").config();
const mailGun = require("nodemailer-mailgun-transport");
const express = require("express");
const nodemailer = require("nodemailer");
const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN_KEY,
  },
};

module.exports = SendUserEmail = (email, subject, text, name, cb) => {
  const transporter = nodemailer.createTransport(mailGun(auth));
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_KEY,
    subject,
    text: `from :${name} :  And The Message : ${text}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, info);
    }
  });
};
