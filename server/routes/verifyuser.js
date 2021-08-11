/*
Router endpoint: http://localhost:3500/api/verifyuser/:user_id
*/
require('dotenv').config();
const express = require('express');

const verifyuser = express.Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = require('twilio')(accountSid, authToken);

verifyuser.get('/:user_id/:phonenumber', (req, res) => {
  twilioClient.verify.services('VA66ca30bad6e29e0171566edb2eb67294')
    .verifications
    .create({
      to: `+${req.params.phonenumber}`, channel: 'sms'})
    .then((verification) => {
      console.log(`Verification message sent via twilio:
      user_id: ${req.params.user_id}
      phone number: +${req.params.phonenumber}
      Verification id: ${verification.sid}`);
    })
    .then((success) => {
      res.status(200).send(`welcome to verify user, ${req.params.user_id}! You will receive a text message verification at the following phone number: +${req.params.phonenumber}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = verifyuser;
