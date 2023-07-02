const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const mongoUrl = 'mongodb://my_self:self123@ac-cj2p4xr-shard-00-00.piiwspq.mongodb.net:27017,ac-cj2p4xr-shard-00-01.piiwspq.mongodb.net:27017,ac-cj2p4xr-shard-00-02.piiwspq.mongodb.net:27017/?ssl=true&replicaSet=atlas-1121jz-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
    .then(() => console.log('Connected!'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.post('/post', (req, res) => {
//     ressend("this is our post method")
// })
// app.put('/put', (req, res) => {
//     ressend("this is our put method")
// })
// app.delete('/delete', (req, res) => {
//     ressend("this is our delete method")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})