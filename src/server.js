import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './lib/jsxRender';

import renderRouter from './routes/renderRouter';
import recipiesApiRouter from './routes/api/recipiesApiRouter';

import resLocals from './middlewares/resLocals';

require('dotenv').config();

const app = express();
const PORT = process.env.DB_PORT ?? 4100;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(resLocals);

app.get('/', (req, res) => {
  res.render('Layout', {});
});

app.use('/', renderRouter);
app.use('/api/recipes', recipiesApiRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
