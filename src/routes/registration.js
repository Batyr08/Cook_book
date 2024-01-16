const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

const render = require('../lib/jsxRender');

const Registration = require("../view/Registration");

router.get("/", (req, res) => {
  render(Registration, null, res);
});

router.post("/", async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const checkLogin = await User.findOne({ where: { login } });
    const checkEmail = await User.findOne({ where: { email } });
    if (checkLogin && checkEmail) {
      res.json({ err: "Такой login и email существует" });
    } else if (checkLogin) {
      res.json({ err: "Такой пользователь существует" });
    } else if (checkEmail) {
      res.json({ err: "Такой email существует" });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: "Farm successfully registered!" });
      });
      console.log(req.session);
      console.log("NewFarm:", newUser);
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
