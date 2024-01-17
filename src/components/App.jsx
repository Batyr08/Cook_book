import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AccountPage from '../pages/AccountPage';
import RecipesPage from '../pages/RecipesPage';

export default function App({ recipes, login }) {
  console.log('App:', login);
  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />
      <div id="bg" />
      <div className="maincontent">
        <NavBar login={login} />
        <Routes login={login}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/recipes" element={<RecipesPage recipes={recipes} login={login} />} />

        </Routes>

        <Footer />
      </div>

    </>
  );
}
