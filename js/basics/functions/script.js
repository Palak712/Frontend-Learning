// funtion without parameter:
// function hello(){
//     console.log("hello");
// }

// hello();


// function with parameter:
// function sum(a,b) {
//     console.log(a+b);  
//     return 1;
//    console.log(a-b);  
// }
// sum(4,3);//argument is passed


// modern js:arrowfunction:
// let mult=(a,b)=>{
//     console.log(a*b);
// }
// mult(7,9);


// factorial:

// // 1)with return,with parameter:
// function factorial(n) {
//     return n*(n-1);    
// }
// console.log(factorial(6));

// 2)with return,without parameter
function fact(n) {
    let mult=1;
    for(let i=2;i<=n;i++){
        mult*=i;
    }
    console.log(mult);
}
fact(5);
