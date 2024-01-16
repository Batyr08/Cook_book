const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <form method="POST" action="/login" id="loginForm">
        <input type="text" name="login" placeholder="login" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
        <p className="loginMsg">&nbsp;</p>
      </form>
    </Layout>
  );
};
