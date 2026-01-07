const express = require('express')
const PORT = 3004

const app = express()

app.get('/', (req, res)=>{
    res.send('Hi')
})

app.listen(PORT, ()=>{
    console.log(`Port opend on ${PORT}`);
    
})