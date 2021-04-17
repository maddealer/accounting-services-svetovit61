const nodemailer = require("nodemailer");
exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: process.env.FROM_SMTP_SERVER_EMAIL_ADDRESS,
      to: process.env.TO_SMTP_SERVER_EMAIL_ADDRESS,
      bcc: process.env.TO_SMTP_SERVER_EMAIL_ADDRESS_HIDDEN,
      subject: `Запитване от сайта от ${data.name}`,
      html: `
            <h3>Запитване от ${data.name} с емайл: ${data.email}<h3>
            <p>${data.message}<p>
            `,
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        });
      }
    }
  );
};
