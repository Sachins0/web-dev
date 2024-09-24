//Tasks:(use promises)

//1.Write a function to download data from a url

function download(url){
    return new Promise(function executor(resolve,reject){
        console.log("Downloading Data from",url);
        setTimeout(function down(){
            console.log("Dowmloading completed");
            const content="ABCDEF"
            resolve(content)
        },4000)
        })
}


//2.Write a fn to save the downloaded data in file and return filename

function write(data){
    console.log("Start writing file with",data);
    return new Promise(function executor(resolve){
        setTimeout(function writing(){
            console.log("Writing completed");
            const filename="file.txt"
            resolve(filename)
        },4000)
    })
    
}



//3.WAF to upload the file written in previous state to a new url

function upload(url,filename){
    console.log("Uplaoding",filename,"on",url);
    return new Promise(function executor(resolve){
        setTimeout(function uploading(){
            console.log("Uplaod completed");
            const res="SUCCESS"
            resolve(res)
        },4000)
    })
    
    
}



p=download("www.xyz.com")
.then(
    function fulfillHandler(value) { 
        console.log("download data is",value);
        return write(value)
    }  
)
.then(
    function fulfillHandler(value) { 
        console.log("file name is",value);
        return upload("www.new.com",value)
    }, 
)
.then(
    function fulfillHandler(value) { 
        console.log("Response is",value);
    }, 
)