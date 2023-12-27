
//object create
// let rectangle={
//     length:2,
//     breadth:3,
//     draw:function(){
//         console.log("drawing");
//     }
// };

//factory function

// function createRectangle(len,bre){
//     return rectangle={
//             length:len,
//             breadth:bre,
//             draw:function(){
//                 console.log("drawing");
//             }
//     };
// }

// let obj1=createRectangle(5,4);

//constructor function
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("drawing");
//     }
// }

// //object creation using constructor
// let objRect=new Rectangle(1,2);

//add
// objRect.color='yellow';
// console.log(objRect);

//delete
// delete objRect.color;
// console.log(objRect);

// let Rect1=new Function(
//     'length','breadth',
//     `this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log("drawing");
//     }`
// );

//object creation using Rect1
// let rect=new Rect1(2,3);
// console.log(rect);

//for-of on objects
let rectangle={
    len:2,
    bre:3
};
// for(let i of Object.keys(rectangle)){
//     console.log(i);
// }
// for(let i of Object.entries(rectangle)){
//     console.log(i);
// }

//check property present or not
// if('len' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('absent');
// }

//object cloning

//iterations
let src={
    a:10,
    b:20,
    c:30,
};

console.log(src);
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(src);
// console.log(dest);

//assign
// let src2={
//     value:25,
// };
// let dest=Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(src);
// console.log(dest);

//spraed
let dest={...src};
console.log(dest);
src.a++;
console.log(src);
console.log(dest);