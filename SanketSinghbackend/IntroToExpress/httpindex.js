const http=require('http')

const PORT=3000;

const server=http.createServer(function listener(request,response){
    //TODO

    if(request.url=='/home'){
        console.log(request.method);
        // const data={
        //     message:"ok",
        //     info:{
        //         desc:"json data"
        //     }
        // }
        // const json=JSON.stringify(data)
        // response.end(json)

        response.writeHead(200,{
            'content-Type':'text/html'
        })
        response.write('<h1>Hello</h1>')
        response.write('<h2>Hello</h2>')
        response.end()
    }

    console.log("request recieved");
})

server.listen(PORT,function exec(){
    console.log(`Server is up and running at ${PORT}`);
})
