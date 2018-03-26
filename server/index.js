const express = require('express');
const bodyParser = require('body-parser'); 
const massive = require('massive');
const controller = require('./controller');

require('dotenv').config();

const port = process.env.PORT || 3535;
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => 
    {app.set('db', dbInstance)
    console.log('massive?')
}).catch(err=> console.log(err));//app is an obj, using dot notation to access set method, set a key value pair 
//db is a key with a value of db - setting up on global obj

// id is chosen as param 
// app is what you pass around to controllers
app.get('/api/products/:shelf_id/:bin_id', controller.getAll);

app.post('/api/bin/:shelf_id/:bin_id', controller.create);
app.get('/api/bin/:shelf_id/:bin_id', controller.getOne);
app.put('/api/bin/:shelf_id/:bin_id', controller.update);
app.delete('/api/delete/:shelf_id/:bin_id', controller.delete);

app.listen(port, () => console.log(`PRAISE PHILLIP IT WORKS! --> ${port}`));