const express = require('express');
const mjml2html = require('mjml');
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');


Sentry.init({ dsn: process.env.SENTRY_MJML_API_DSN });


const app = express();
// add sentry middleware
app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mjml2html', (req, res) => {

  var options = {
    keepComments: req.body.keepComments || true,
    minify: req.body.minify || false,
    beautify: req.body.beautify || false,
    validationLevel: req.body.validationLevel || "soft"
  }

  const htmlOutput = mjml2html(req.body.mjml, options)

  res.status(200).send({
    success: (htmlOutput["errors"].length == 0) ? true : false,
    ...htmlOutput
  })
});

app.use(Sentry.Handlers.errorHandler());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});


