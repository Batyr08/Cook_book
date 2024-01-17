import React from 'react';

export default function LoginPage() {
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', e.target.email.value);
    data.append('password', e.target.password.value);
    const res = Object.fromEntries(data);
    if (!res.email || !res.password) {
      alert('ZAPOLNI');
    } else {
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        console.log('response:', response);
        const result = await response.json();
        console.log('result:', result);
        if (result.msg) {
          window.location.href = '/';
        }
        if (result.err) {
          console.log(result.err);
        }
      } catch (error) {
        console.log('Ошибка авторизации', error);
        alert('Ошибка авторизации');
      }
    }
  };

  return (
    <>
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1> Войдите в аккаунт </h1>
        <form onSubmit={handlerSubmit}>
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
