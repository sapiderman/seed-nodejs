const { Router } = require('express');
const router = Router();
const { health } = require('../controller');
const path = require('path');
const { render } = require('../app');

router.get('/health', health);
router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/html/home.html'))
    res.render('home');
});


module.exports = router;