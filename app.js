require('@babel/register');
require('dotenv').config()
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const logger = require('morgan');
const path = require('path');
const { secureRoute, checkUser } = require('./src/middlewares/common');


const sessionConfig = {
  name: 'Cookbook',
  store: new FileStore(),
  secret: 'S bogom',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};


app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));


const app = express();
const PORT = process.env.PORT;


app.use('/', mainRouter)
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
