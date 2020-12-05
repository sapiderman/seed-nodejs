const { Router } = require('express');
const v1Router = Router();

const { hello, bye } = require('../controller');

function doForms(req, res, next) {
    res.render('forms',{ title: 'Registration form' });
};

v1Router.get('/v1/hello', hello);
v1Router.get('/v1/bye', bye);

v1Router.post('/v1/forms', doForms);


module.exports =  v1Router ;