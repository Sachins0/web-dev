const express=require('express')

const PORT=3000;

const app=express()

const myLogger=(req,res,next)=>{
  console.log("middleware 1");
  next();
}

const extLogger=(req,res,next)=>{
  console.log("middleware 2");
  next()
}

const middlewares=[myLogger,extLogger]

app.get('/home', middlewares,(request, response) => { 
    response.send('Hello World!')
  })

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })