
function bye(req, res, next) {
    res.render('index', { title: 'Byeeee', message: 'Good Byee!' });
  };
  
module.exports = {
   bye 
}
