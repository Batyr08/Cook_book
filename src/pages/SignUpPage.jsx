import React, { useState } from 'react';

export default function SignUpPage() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   login: "",
  //   password: "",
  //   repeat: ""
  //  })
  //  const changeHandler = (event) => setFormData((prev) => ({ ...prev, [event.target.name] : event.target.value }) );
  //  const handlerSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response
  //   } catch (error) {

  //   }
  //  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', e.target.email.value);
    data.append('login', e.target.login.value);
    data.append('password', e.target.password.value);
    data.append('repeat', e.target.repeat.value);
    const res = Object.fromEntries(data);
    if (!res.email || !res.login || !res.password) {
      alert('ZAPOLNI');
    } else {
      try {
        const response = await fetch('/api/auth/signup', {
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
        console.log('Ошибка регистарции', error);
        alert('Ошибка регистрации');
      }
    }
  };

  return (
    <>
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1>Зарегистрируйтесь</h1>
        <form onSubmit={handlerSubmit}>
          {' '}
          {/* action='/api/auth/signup' method='POST' onSubmit={handlerSubmit} */}
          <div className="txt_field">
            <input name="email" type="email" required />
            <label>Email</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="login" type="text" id="inputname" required />
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
