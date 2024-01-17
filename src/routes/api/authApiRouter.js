import express from 'express';
import bcrypt from 'bcrypt';

import { User } from '../../../db/models';
import resLocals from '../../middlewares/resLocals';

const router = express.Router();

// router.get('/login', async (req, res) => {
// })

router.post('/login', resLocals, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
          // req.session.user = {
          //   id: user.id,
          //   name: user.login,
          // };
        req.session.login = user.login;
        // res.locals.login = user.login;
        req.session.save(() => {
          res.json({ msg: 'Вы успешно авторизованы' });
        });
      } else {
        res.json({ err: 'Неверный пароль!' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден!' });
    }
  } catch (error) {
    console.log(`Ошибка авторизации ${error}`);
    res.json({ err: 'Ошибка при авторизации' });
  }
});

// router.get('/registration', async (req, res) => {
// })

router.post('/signup', async (req, res) => {
  const { email, login, password, repeat } = req.body;
  try {
    const checkLogin = await User.findOne({ where: { login } });
    const checkEmail = await User.findOne({ where: { email } });
    if (checkLogin && checkEmail) {
      res.json({ err: 'Такой login и email существует' });
    } else if (checkLogin) {
      res.json({ err: 'Такой пользователь существует' });
    } else if (checkEmail) {
      res.json({ err: 'Такой email существует' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, login, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован' });
      });
      console.log(req.session);
      console.log('Новый пользователь:', newUser);
    }
  } catch (error) {
    res.send(`Ошибка ------> ${error}`);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Cooking');
    res.redirect('/');
  });
});

export default router;
