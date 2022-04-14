const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017');

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/Views/VisualizeForms.html')
})

app.listen(4000, function() {
    console.log('server is running');
})