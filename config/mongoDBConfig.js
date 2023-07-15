var mongoose = require("mongoose");
require('dotenv').config()

const DBURL = process.env.MONGODBURL || 'mongodb://my_self:a8mGno68Gs1dVxQY@ac-cj2p4xr-shard-00-00.piiwspq.mongodb.net:27017,ac-cj2p4xr-shard-00-01.piiwspq.mongodb.net:27017,ac-cj2p4xr-shard-00-02.piiwspq.mongodb.net:27017/?ssl=true&replicaSet=atlas-1121jz-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
console.log("starting mongo connection");
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((conn) => {
        console.log("connected from Config File")
    })
    .catch((err) => {
        console.log("connection error", err)
    })



module.exports = mongoose;