if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://Connor:KexmrcQmjZDLJtwQ@cluster0.3sqce.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(uri);

// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

const db = client.connect();
// db.on('error', error => console.error(error));
// db.once('open', error => console.error('Connected to Mongoose'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);