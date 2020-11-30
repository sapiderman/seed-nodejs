const { Router } = require('express');
const router = Router();

const { hello, health } = require('../controller');

router.get('/hello', hello);
router.get("/health", health);



module.exports =  router ;