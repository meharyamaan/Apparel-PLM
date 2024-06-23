const mongoose = require ('mongoose');

const ENV = require('../config.js')

async function connect(){

    mongoose.set('strictQuery', true)
    const db = await mongoose.connect(ENV.MONGO_URI);
    console.log("Database Connected")
    return db;
}

module.exports = connect;
