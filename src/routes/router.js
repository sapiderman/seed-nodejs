import { Router } from 'express';
import health from '../controller/health.js';
const router = Router();

router.get('/health', health);
router.get("/", (req, res) => {    
    res.render('home');
});


export default router;