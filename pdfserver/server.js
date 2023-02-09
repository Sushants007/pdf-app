const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Sushant:sushant@cluster1.amdqknu.mongodb.net/pdfhub");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/', routes)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})