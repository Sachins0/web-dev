//functions
// function sum(val1,val2){
//     let res=val1+val2;
//     console.log(res);
// }
// sum(10,11);

// function sum(val1,val2){
//     let res=val1+val2;
//     return res;
// }
// let add=sum(10,11);
// console.log(add);

// function nums(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(nums(7,8,9,10,11));

// let nums=(val1,val2)=>{
//     console.log(val1+val2);
// };
// nums(1,2);

//objects
let user={
    fname:"sachin",
    lname:"singh",
    role:"admin"
};
// console.log(user);
// console.log(user.role);
// user.role="manager";
// console.log(user);

//for in
for(let i in user){
    // console.log(i);
    console.log(user[i]);
}