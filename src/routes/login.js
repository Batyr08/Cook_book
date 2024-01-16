const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

const render = require('../lib/render');

const Login = require("../view/Login");

router.get("/", (req, res) => {
  render(Login, null, res);
res.send('ok')
});

router.post("/", async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.save(() => {
          res.json({ msg: "Вы успешно авторизованы!" });
        });
      } else {
        res.json({ err: "Неверный пароль" });
      }
    } else {
      res.json({ err: "Такой пользователь не найден!" });
    }
  } catch (error) {
    console.log(`Ошибка авторизации ${error}`);
    res.json({ err: "Ошибка при авторизации" });
  }
});

module.exports = router;
