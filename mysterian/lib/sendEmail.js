var nodemailer = require('nodemailer');

//send email
exports.sendingMail = (email, token) => {

    var email = email;
    var token = token;

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'restaurantmysteria@gmail.com', // Your email id
            pass: 'zfahqguufmkoznks' // Your password
        }
    });

    var mailOptions = {
        from: 'restaurantmysteria@gmail.com',
        to: email,
        subject: 'Mysteria Restaurant Registration Link',
        html: '<p>You requested for registration to our website, kindly use this' +
            '<a href="http://localhost:5500"?token=' + token + '>' +
            ' link</a> to confirm your registration</p>'
    };

    mail.sendMail(mailOptions, function(error, info) {
        if (!error)
            console.log('registration link sent')
        else
            console.log('Error: link not sent')
    });



}