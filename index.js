//Life first node js project . Date : 23March 2021
const express= require ('express')

const app =express()

app.get('/',(req , res)=>{
    res.send("Thank you for calling  me again lovely baby")
})
app.listen(4200,()=>console.log("Listening to port 3000"))