const { Router } = require('express');
const router = Router();

const { hello, health, bye } = require('../controller');

function doForms(req, res, next) {
    res.render('forms',{ title: 'Registration form' });
};

router.get('/health', health);
router.get('/v1/hello', hello);
router.get('/v1/bye', bye);

router.post('/v1/forms', doForms);


module.exports =  router ;