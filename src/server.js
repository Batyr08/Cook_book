import path from 'path';
import morgan from 'morgan';
import express from 'express';
import jsxRender from './lib/jsxRender';
import renderRouter from './routes/renderRouter';
import resLocals from './middlewares/resLocals';

require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

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

const app = express();
const PORT = process.env.PORT ?? 5000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(resLocals);

app.get('/', (req, res) => {
  res.render('Layout');
});

app.use('/', renderRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
