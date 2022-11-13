 function sayHello(){
    console.log("Hello");
 }
 function Add(num1,num2,callBack){
    console.log(num1+num2);
    callBack();

 }
 let a=2;
 let b=5;
 Add(a,b,sayHello);