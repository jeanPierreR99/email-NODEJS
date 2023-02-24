const { Router } = require('express');
const router = Router();

const ruta = require('../controller/controller')

router.post('/send-email', ruta.sendMail);
router.post('/send-email2', ruta.sendMail2);
router.get('/send-email_get/:email', ruta.sendMailGet)
module.exports = router;