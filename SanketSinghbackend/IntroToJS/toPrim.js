obj1={}
console.log(100-obj1); //NaN

obj2={x:10,y:20};
console.log(100-obj2);  //NaN

obj3={x:10,valueOf(){return 99}}
console.log(100-obj3);  //1

obj4={x:10,toString(){return "88"}}
console.log(100-obj4);  //12

obj5={x:10,toString(){return {}}}
console.log(100-obj5);  //TypeError