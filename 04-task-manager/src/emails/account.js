const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'mrbitwise@gmail.com',
    from: 'mrbitwise@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actualy get to you...'
});