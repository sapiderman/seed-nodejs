
function hello(req, res, next) {
  res.render('index', { title: 'Hey', message: 'hellooooo!' });
};

export default hello;
  