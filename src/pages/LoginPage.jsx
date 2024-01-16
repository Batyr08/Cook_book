import React from 'react';

export default function LoginPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1> Войдите в аккаунт </h1>
        <form>
          <div className="txt_field">
            <input name="email" type="text" required />
            <label>Email</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="password" type="password" required />
            <label>Пароль</label>
            <span />
          </div>

          <input type="submit" value="Войти" />
          <div className="signup_link">
            Еще не зарегистрированы?
            {' '}
            <a href="/signup">Зарегистрироваться</a>
          </div>
        </form>
      </div>

    </>
  );
}
