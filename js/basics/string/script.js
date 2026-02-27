// let str="ullura bhai";
// console.log(str);
// console.log(str.length);
// console.log(str[4]);

// note://since elements of the string cannot6 be updated so it is immutable.

// let object={
//     item:"pen",
//     cost:10,
// };
// console.log("the cost of",object["item"],"is",object["cost"]);
// // template literal strings(embed expressions in string)
// let output=`the cost of ${object.item} is ${object.cost}`;
// console.log(output);

// // template literal strings(embed expressions in string)
// let specialString=`this is literals.`;
// console.log(typeof specialString);


// string methods:
// 1)str.uppercase
let str="  These are string ";
let str2="methods in the following:";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());//remove whitespaces only from start and and of the string not from the middle.
console.log(str2.slice(5,9));
console.log(str.concat(str2));
console.log(str2.replace("i","o"));//replaces only first value find in the string.
console.log(str.charAt(12));