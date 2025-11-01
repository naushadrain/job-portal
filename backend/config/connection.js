const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();

module.exports = () => {
    const connection = process.env.MONGO_URI;
    mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}
