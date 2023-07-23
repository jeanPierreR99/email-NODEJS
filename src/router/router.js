const { Router } = require('express');
const router = Router();

const ruta = require('../controller/controller')
var eventData = {
}

router.post('/send-email', ruta.sendMail);
router.post('/confirmation', ruta.sendMail2);
router.get('/send-email_get/:email', ruta.sendMailGet)
router.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Envía eventos al cliente cada 2 segundos
  setInterval(() => {

    res.write(`event: data\n`);
    res.write(`data: ${JSON.stringify(eventData)}\n\n`);
  }, 2000);
});

router.post("/eventsPost", (req, res) => {
  const { datetime, temperature } = req.body;
  console.log(datetime + " " + temperature)
  eventData = {
    datetime,
    temperature
  }
  res.json("succefull")
})
module.exports = router;