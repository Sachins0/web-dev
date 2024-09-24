const fs=require('fs')
const TransformStream=require('stream').Transform

const readstream=fs.createReadStream(__dirname+'/run.txt')

const fileWriteStream=fs.createWriteStream(__dirname+'/write.txt')
const transformedStream=new TransformStream({
    transform(chunk,enc,cb){
        this.push(chunk.toString().toUpperCase())
        setTimeout(cb,1000)
    }
})

const writeStream=process.stdout
const outputStream=readstream.pipe(transformedStream)
outputStream.pipe(writeStream)
outputStream.pipe(fileWriteStream)