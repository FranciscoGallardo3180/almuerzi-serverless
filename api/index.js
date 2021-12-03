const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const meals = require('./routes/meals');
const orders = require('./routes/orders');
const auth = require('./routes/auth');
app.use(bodyParser.json());
app.use(cors());


//conectar con srv MongoAtlas
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology:true});



app.use('/api/meals',meals);
app.use('/api/orders',orders);
app.use('/api/auth',auth);


/*app.get('*',(req,res)=>{
    res.send('Hola Mundo Desplegado en Cloud, falta configurar bd y esquema de datos en Mongo');
});*/


module.exports = app;