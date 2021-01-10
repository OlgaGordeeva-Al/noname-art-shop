require('dotenv').config();
//const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnect = require('./config/db');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const artistRouter = require('./routes/artistRouter');
const artRouter = require('./routes/artRouter');
const userRouter = require('./routes/userRouter');
const basketRouter = require('./routes/basketRouter');

const app = express();
dbConnect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
const secretSession = process.env.SECRETSESSION;

app.use(
  session({
    name: 'sid',
    secret: process.env.SECRETSESSION,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  res.locals.name = req.session?.user?.name;
  res.locals.admin = req.session?.user?.admin;
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/goods', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/artists', artistRouter);
app.use('/products', artRouter);
app.use('/user', userRouter);
app.use('/basket', basketRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.use(function (req, res, next) {
//   next(createError(404));
// });

// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
