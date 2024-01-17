import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './lib/jsxRender';

import renderRouter from './routes/renderRouter';
import recipiesApiRouter from './routes/api/recipiesApiRouter';
import authApiRouter from './routes/api/authApiRouter';

import session from 'express-session';
import FileStoreFactory from 'session-file-store';
const FileStore = FileStoreFactory(session);

import resLocals from './middlewares/resLocals';

require('dotenv').config();

const app = express();
const PORT = process.env.DB_PORT ?? 4100;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'Cooking',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'BIGSECRET',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(resLocals);

app.get('/', (req, res) => {
  const { login } = req.session;
  res.render('Layout', { login });
});

app.use('/', renderRouter);
app.use('/api/auth', authApiRouter);
app.use('/api/recipes', recipiesApiRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
