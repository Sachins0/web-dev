import express from 'express';

const app=express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"first joke",
            content:"This is 1st joke"
        },
        {
            id:2,
            title:"second joke",
            content:"This is 2nd joke"
        },
        {
            id:3,
            title:"third joke",
            content:"This is 3rd joke"
        },
        {
            id:4,
            title:"fourth joke",
            content:"This is 4th joke"
        },
        {
            id:5,
            title:"fifth joke",
            content:"This is 5th joke"
        },
    ]
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
})