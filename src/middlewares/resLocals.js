export default function resLocals(req, res, next) {
  res.locals.path = req.originalUrl;
  // res.locals.login = login;
  // res.locals.session = res.user.login;
  next();
}
