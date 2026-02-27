// for loop:

// // print 1-5:
// for (let i=1;i<=5;i++){
//     console.log(i);
// }

// while loop:

// // print sum:
// let sum=0,i=0;
// while(i<6){
//     sum=sum+i++;
// }
// console.log(sum);

// // do while loop:
// let i=1;
// let n=prompt("Enter a number to print its table:");
// do{
// console.log("i*n=",i*n);
// i++;
// }while(i<=10);

// // for of:
// let name="username";
// for(let i of name){
//     console.log(name); 
// }

// // for in
// let student={
//    name:"Palak",
//    rollNum:100,
//    grade:'B',
// };
// for(let i in student){
//     // console.log(i);
//     console.log("key=",i,"& value=",student[i]);
// }

// print even between 1-100:
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}