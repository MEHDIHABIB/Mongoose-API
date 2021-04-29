const express = require('express') ;
const app = express() ;
const connectDB = require("./config/connectDB") ;
app.use(express.json()) ;

//connect to database
connectDB()

//route

app.use('/api/exemple', require('./routes/contact'))

const port = process.env.PORT || 5000 ;

app.listen(port , (err)=> {
    err ? console.log('error connect to server') : console.log(`server is connected on ${port}`)
})