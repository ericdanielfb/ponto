const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dotenv = require('dotenv');

dotenv.config();


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const app = express();
const port = process.env.PORT || '3000';


const smartphones = require('./routes/route');

let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/smartphones', smartphones);

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});