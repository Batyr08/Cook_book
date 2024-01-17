import React from 'react';

export default function NavBar() {
  return (
    <>
      <link rel="stylesheet" href="/css/navbar.css" />

      <div className="glass" />
      <div className="logo_container">
        <input type="checkbox" id="nav-cta" />
        <aside>
          <label htmlFor="nav-cta" className="cta"><span /></label>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/recipes">Рецепты</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/account">Профиль</a></li>
            <li style={{ paddingTop: '90px' }}><a href="/login">Войти</a></li>
            <li style={{ paddingTop: '90px' }}><a href="/api/auth/logout">Выйти</a></li>
            <div className="navlogo">
              <a href="/chat"><img className="chatpng" src="/img/chat.png" alt="enteringico" /></a>
            </div>
          </ul>
        </aside>
      </div>

    </>
  );
}
