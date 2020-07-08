const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Configurar cabeceras y cors
app.use((req, res, next) => {
    
    res.header("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, X-WP-Nonce, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Cache-Control', 'max-age=0,no-cache,no-store,post-check=0,pre-check=0,must-revalidate');
    res.header('Expires', '-1');
    next();
});

app.use(cors());

//Routes
//Feriados
app.use('/', require('./routes/feriados'));

module.exports = app;
