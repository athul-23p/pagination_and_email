
const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cc88c8deb2cad8",
    pass: "9ca1b6da9470c3",
  },
});

module.exports = transport;