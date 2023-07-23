require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(require('./router/router.js'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`servidor iniciado: ${PORT}`);
})