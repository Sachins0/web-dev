//Tasks:(use cbs)

//1.Write a function to download data from a url

function download(url,cb){
    console.log("Downloading Data from",url);
    setTimeout(function down(){
        console.log("Dowmloading completed");
        const content="ABCDEF"
        cb(content)
    },4000)
}



//2.Write a fn to save the downloaded data in file and return filename

function write(data,cb){
    console.log("Start writing file with",data);
    setTimeout(function writing(){
        console.log("Writing completed");
        const filename="file.txt"
        cb(filename)
    },4000)
}



//3.WAF to upload the file written in previous state to a new url

function upload(url,filename,cb){
    console.log("Uplaoding",filename,"on",url);
    setTimeout(function uploading(){
        console.log("Uplaode completed");
        const res="SUCCESS"
        cb(res)
    },4000)
    
}



download("www.xyz.com",function callback(content){
    console.log("download data is",content);
    console.log("We are now going to process downloaded data");
    write("abcdef",function callback(name){
        console.log("file written is",name)
        console.log("We have downloaded and written file now we will upload")
        upload("www.new.com","file.txt",function callback(res){
            console.log("Response is",res);
        })
    })
})