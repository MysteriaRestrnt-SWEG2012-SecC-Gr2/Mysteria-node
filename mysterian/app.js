const express = require("express");
const path = require("path");
const app = express();
var flash = require('express-flash')
var conn = require('./config/db_Connection');


var session = require('express-session');

app.use(session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// const publicDirectory = path.join(__dirname, './public');
// app.use(express.static(publicDirectory));
app.use('/public', express.static(path.join(__dirname, "public")));

app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


console.log(__dirname);
app.set('view engine', 'ejs');

app.use('/', require('./routes/pages'));
app.use('/', require('./routes/authenticate-user'));

//app.use('/auth', require('./routes/auth'));

var registrationRouter = require('./routes/register');
var loginRouter = require('./routes/login');
//var dashboardRouter = require('./routes/dashboard-route');
//var logoutRouter = require('./routes/logout-route');
app.use('/', registrationRouter);
app.use('/', loginRouter);
//app.use('/', dashboardRouter);
//app.use('/', logoutRouter);

app.listen(5500, () => {
    console.log("SERVER PORT: 5500");
});