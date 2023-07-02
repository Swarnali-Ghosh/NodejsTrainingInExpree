const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/post', (req, res) => {
    ressend("this is our post method")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})