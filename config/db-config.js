const mongoose = require('mongoose');
const { db_url } = require('./server-config');

const connect = async () => {
    await mongoose.connect(db_url);
}

module.exports = connect;