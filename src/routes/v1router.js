const { Router } = require('express');
const v1Router = Router();

const { hello, bye } = require('../controller');

function doForms(req, res, next) {
    res.render('forms',{ title: 'Registration form' });
};

v1Router.get('/hello', hello);
v1Router.get('/bye', bye);

v1Router.get('/forms', doForms);

module.exports =  v1Router ;
