// let arr=[56,24,45,85,46,33,77,36];
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);//array are object types.
// console.log(arr[3]);
// arr[3]=67;
// console.log(`updated arr[3] is${arr[3]}`);//since element of the array can be updated so it is mutable.



//for of loop:
// let cities=["Delhi","Pune","Mumbai","Hyderabad","Gurgaon"];
// for (let city of cities){
//     console.log(city);
// }

// // for loop
// let cities=["Delhi","Pune","Mumbai","Hyderabad","Gurgaon"];
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }

// // methods in array:
// let arr=[35,54,67,68,22,97,30,83,75],arr2=[77,34,24,87,53];
// console.log(arr);
// arr.push(24);//add 24 in last additional index
// console.log("push(24)",arr);
// console.log("pop",arr.pop());//remove last element
// console.log("new array:",arr);
// console.log("arr.toString()",arr.toString());//convert the arr into string
// console.log("arr.concat(arr2)",arr.concat(arr2));//join arr with arr2
// arr.unshift(78);//add 78 at the first element,shifting existing elements to next indices
// console.log("unshift(78)",arr);
// console.log("shift", arr.shift());//remove first element,shifting existing elements to previous indices
// console.log("new array:", arr);
// console.log("slicing array(2,5)",arr.slice(2,5));//return a new array containing elements from index 2 to 4











// let arr=[45,22,56,36,77,27,76,57];
// console.log("arr.splice(3,0,6)",arr.splice(3,0,6));//add
// console.log("new array:",arr);
// console.log("arr.splice(3,2),by deleting:", arr.splice(3, 2));//remove 2 elements starting from index 3 and return the removed elements as a new array
// console.log("new array:",arr);
// console.log("arr.splice(5,1,377),by deleting:",arr.splice(5,1,377));//update
// console.log("new array:",arr);