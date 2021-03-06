const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require ('massive')
const ctrl = require('./controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

//dbInstand can be anything you want. It's the response. app.set nameing it in a string and then using 
massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
})

app.get(`/api/planes`, ctrl.getPlanes)

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

