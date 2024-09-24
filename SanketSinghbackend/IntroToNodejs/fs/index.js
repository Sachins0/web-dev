import {readFile, writeFile} from "fs/promises"

const filePath=new URL('./run.txt',import.meta.url)
// console.log(filePath);
let contents=await readFile(filePath,{encoding:'utf-8'})

console.log(contents);

// const data={
//     name:"sachin singh",
//     age:"18"
// }
// for (const [key,value] of Object.entries(data)){
//     contents=contents.replace(`{{${key}}}`,value)
// }
//  await writeFile(new URL('./newindex.html',import.meta.url),contents)
