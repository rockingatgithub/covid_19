const mongoose = require('mongoose');


// =============================connecting to mongodb===============================


mongoose.connect('mongodb://localhost/hospital_api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to monodb"));

db.once('open', function(){
    console.log('Connected to database ::  MongoDB');
});

module.exports = db;