const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello world how are you")
})
const port=5001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})