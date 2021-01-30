import { Router } from 'express';
const v1Router = Router();

import { hello, bye, getTime } from '../controller/index.js';

function doForms(req, res, next) {
    res.render('forms',{ title: 'Registration form' });
};

v1Router.get('/hello', hello);
v1Router.get('/bye', bye);

v1Router.get('/forms', doForms);
v1Router.get('/time', getTime);

export default v1Router;
