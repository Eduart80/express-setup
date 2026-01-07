const express = require('express')
const path = require('path')
const PORT = 3004

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res)=>{
    res.send('Welcome, this is my API page')
})

app.get('/contactUs/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contactUs.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})