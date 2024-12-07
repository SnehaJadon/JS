// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// equality and comparison operator works differently they convert null to 0 in line 13 and 14 hence 

console.log(null > 0);//false
console.log(null == 0);// false
console.log(null >= 0);// true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
//strictly equal to check datatype are same in both side or not

console.log("2" === 2);