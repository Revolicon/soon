import Airtable from "airtable"
import emailValidator from "email-validator";
import request from "request";

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
});
const database = Airtable.base(process.env.AIRTABLE_API_BASE);

function create(req, res) {
  database('Mails').select({
    filterByFormula: `{Email} = "${req.body.email}"`
  }).all(function(queryError, queryResult) {
    if (queryError) res.status(200).json({ success: false, message: "System error!", queryError })
    if (queryResult.length > 0) {
      res.status(200).json({ success: false, message: 'Email already registered.' })
    } else {
      database('Mails').create([{
        "fields": {
          "Email": req.body.email,
          "Active": true
        }
      }], function(createError, createResult) {
        if (createError) {
          res.status(200).json({ success: false, message: "System error!", createError })
        } else {
          res.status(200).json({ success: true, result: createResult?.[0]?.fields })
        }
      });
    }
  });
}

export default function handler(req, res) {
  if (!req.body.email) res.status(200).json({ success: false, message: "Email field is empty." })
  if (!req.body.token) res.status(200).json({ success: false, message: "Failed captcha verification." })
  if(emailValidator.validate(req.body.email)) {
    let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.RECAPTCHA_PRIV_KEY + "&response=" + req.body.token + "&remoteip=" + req.connection.remoteAddress;

    request(verificationUrl,function(error, response, body) {
      body = JSON.parse(body);
      if(body.success !== undefined && !body.success) {
        res.status(200).json({ success: false, message: "Failed captcha verification." })
      } else {
        create(req, res)
      }
    });
  } else {
    res.status(200).json({ success: false, message: "Email field is invalid." })
  }
}
