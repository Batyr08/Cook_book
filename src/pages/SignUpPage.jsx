import React from 'react';

export default function SignUpPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1>Зарегистрируйтесь</h1>
        <form>
          <div className="txt_field">
            <input name="email" type="email" required />
            <label>Email</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="name" type="text" id="inputname" required />
            <label>Имя</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="password" type="password" required />
            <label>Введите пароль</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="repeat" id="repeat" type="password" required />
            <label>Повторите пароль</label>
            <span />
          </div>

          <input type="submit" value="Зарегистрироваться" />
          <div className="signup_link">
            Есть аккаунт?
            {' '}
            <a href="/login">Войдите</a>
          </div>
        </form>
      </div>
    </>
  );
}
