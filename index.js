require ('dotenv').config()
const express =require('express')
const app=express()
const port =4000
app.get('/',(req,res)=>{
    res.send('hello World')

})
app.get('/ankur',(req,res)=>{
    res.send('<h1>Ankur</h1>')

})
app.listen(process.env.PORT,()=>{
    console.log(`port is running ${port}`)
})