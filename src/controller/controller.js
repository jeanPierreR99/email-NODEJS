require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

//render html res.sendFile(path.resolve(__dirname, '../views/index.html'

const html1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>

    <style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background-color: #f0a4aa;
  margin-top: 50px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  width: 90%;
  height: auto;
  background-color: #da0d66;
  margin: auto;
  border-radius: 15px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.308); */
  overflow: hidden;
}

.image {

    background-image: url('cid:profile');
    background-repeat: no-repeat;
    background-size:contain;
    background-position: 50%;
  width: 30%;
  margin: auto;
margin-top: 30px;  
  height: 120px;
  border: 4px solid #fff;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.548);
  font-size: 4em;
  margin-bottom: 20px;
}

h3,p {
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 5px;
  text-align: center;
}

.div{
    margin-top: 10px;
}
.box {
height: 100px;
background-color: rgb(251, 242, 185);
  /* width: 100%; */
  text-align: center;
  /* height: 140px; */
  border-radius: 15px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* gap: 15px; */
  /* position: relative; */
  /* height: auto; */
  margin-top: 20px;
}
.box .div button {
  /* position: absolute; */
  /* top: 0; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  border: 1px rgb(254, 206, 233) solid;
  background-color: #fff;
  padding: 10px 40px;
  border-radius: 100px;
  /* box-shadow: 0 0 7px #8a3e56; */
  color: #0b7a93;
  font-weight: 600;
  margin-top: -30px;
}

.box p {
  text-transform: capitalize;
  font-weight: 500;
  color: rgb(85, 85, 85);
  margin-bottom: 20px;
}
.detection{
  text-align: center;
  color: rgb(255, 196, 0);
}
    </style>
</head>
<body>
    <div class="card">
    <h1 class="detection">fuego detectado peligro!</h1>
       <div class="div">
        <div class="image"></div>
       </div>
       <div class="div">
        <h3>Jean Pierre</h3>
    </div>
    <div class="div">
        <p>Web Developer</p>
    </div>
        <div class="box">
            <div class="div">
          <button class="boton"><a href="https://github.com/jeanPierreR99/" style="text-decoration: none; color: #ff0263;" target="_blank">Ver gitHub</a></button>
        </div>
        <div class="div">
          <p> gitHub </p>
        </div>
        </div>
      </div>

</body>
</html>
    `;

const html2 = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        center{
            padding: 50px;
            color: #56585b;
            text-align: left;
        }
        img{
            width: 300px;
            height: 200px;
            margin-bottom:-30px ;
        }
        h1{
            color: rgb(55, 53, 53);
        }
        div{
            margin-bottom: 20px;
            text-align: justify;
        }
    
        .log{
            color: rgb(255, 255, 255);
            text-decoration: none;
            background: rgb(248, 44, 78);
            padding: 7px 25px 7px 25px;
        }
        .pass{
            color: #e8152e;
        }
    </style>
</head>
<body>
    <center>
        <img src="https://www.cype.pe/wp-content/uploads/2020/03/1-1.jpg" alt="">
    <h1>Su Voto fue registrado con exito!</h1>
   <div><a href="" class="log">Ingresar</a></div>
<div><span>¡Gracias por ejercer tu derecho al voto electrónico! Tu participación es fundamental para fortalecer nuestra democracia. Hemos recibido tu voto de manera segura y confiable. Tu voz cuenta y juntos construimos el futuro que deseamos. ¡Gracias por ser parte de este proceso!</span></div>
<div><a href="" class="pass">user198j43</a></div>
</center>
</body>
</html>
    `;

const html3 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>

    <style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background-color: #f0a4aa;
  margin-top: 50px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  width: 90%;
  height: auto;
  background-color: #292d6e;
  margin: auto;
  border-radius: 15px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.308); */
  overflow: hidden;
}

.image {

    background-image: url('cid:profile');
    background-repeat: no-repeat;
    background-size:contain;
    background-position: 50%;
  width: 30%;
  margin: auto;
margin-top: 30px;  
  height: 120px;
  border: 4px solid #fff;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.548);
  font-size: 4em;
  margin-bottom: 20px;
}

h3,p {
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 5px;
  text-align: center;
}

.div{
    margin-top: 10px;
}
.box {
height: 100px;
  background-color: rgb(250, 240, 97);
  /* width: 100%; */
  text-align: center;
  /* height: 140px; */
  border-radius: 15px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* gap: 15px; */
  /* position: relative; */
  /* height: auto; */
  margin-top: 20px;
}
.box .div button {
  /* position: absolute; */
  /* top: 0; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  border: 1px rgb(239, 229, 114) solid;
  background-color: #fff;
  padding: 10px 40px;
  border-radius: 100px;
  /* box-shadow: 0 0 7px #8a3e56; */
  color: #0b7a93;
  font-weight: 600;
  margin-top: -30px;
}

.box p {
  text-transform: capitalize;
  font-weight: 500;
  color: rgb(85, 85, 85);
  margin-bottom: 20px;
}

    </style>
</head>
<body>
    <div class="card">
       <div class="div">
        <div class="image"></div>
       </div>
       <div class="div">
        <h3>Jean Pierre</h3>
    </div>
    <div class="div">
        <p>Web Developer</p>
    </div>
        <div class="box">
            <div class="div">
          <button class="boton"><a href="https://github.com/jeanPierreR99/" style="text-decoration: none; color: #ff0263;" target="_blank">Ver gitHub</a></button>
        </div>
        <div class="div">
          <p> gitHub </p>
        </div>
        </div>
      </div>

</body>
</html>
    `;

const CLIENTE_ID = process.env.ID;
const CLIENT_SECRET = process.env.SECRET;
const REDIRECT_URI = process.env.URI;
const REFRESH_TOKEN = process.env.TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENTE_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
    const accessToken = await oAuth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: CLIENTE_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });
    const mailOptions = {
      from: "<correo@gmail.com>",
      to: email,
      subject: "NODEMAILER NODEJS",
      html: html1,
      attachments: [
        {
          filename: 'profile.png',
          path: './src/public/image/profile.png',
          cid: 'profile'
        }
      ]
    };
    await transporte.sendMail(mailOptions)
      .then(result => res.json("ok"))
      .catch((error) => console.log(error.message));
  }
  catch (e) {
    console.log(e);
  }
}

const sendMail2 = async (req, res) => {
  try {
    const { email } = req.body;
    const accessToken = await oAuth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: CLIENTE_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });
    const mailOptions = {
      from: "<correo@gmail.com>",
      to: email,
      subject: "CONFIRMACION DE VOTO",
      html: html2,
    };
    await transporte.sendMail(mailOptions)
      .then(result => res.json("success"))
      .catch((error) => console.log(error.message));

  }
  catch (e) {
    console.log(e);
  }
}

const sendMailGet = async (req, res) => {
  try {
    const email = req.params.email;

    const accessToken = await oAuth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: CLIENTE_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });
    const mailOptions = {
      from: "<correo@gmail.com>",
      to: email,
      subject: "NODEMAILER NODEJS",
      html: html3,
      attachments: [
        {
          filename: 'profile.png',
          path: './src/public/image/profile.png',
          cid: 'profile'
        }
      ]
    };
    await transporte.sendMail(mailOptions)
      .then(result => res.redirect('/'))
      .catch((error) => console.log(error.message));

  }
  catch (e) {
    console.log(e);
  }
}

module.exports = {
  sendMail,
  sendMail2,
  sendMailGet
}