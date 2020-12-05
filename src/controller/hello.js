
function hello(req, res, next) {
  res.render('index', { title: 'Hey', message: 'hellooooo!' });
};

module.exports = { 
  hello 
}
  