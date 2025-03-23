// let a =10
// let b = 20 
// console.log(a+b);

// let c = 10+1 // number is added
// let d = "10"+1 // string can added like this
// console.log(c, d);
 
let c= 10 
let d= "11"
console.log(c+d);
console.log(typeof (c+d)); // this is concatination and its type string 

let a = 10 
let b= 20
console.log("Sum of 10 and 20" + a+ b); // not getting sum here its also concatination 
// string + number = string
console.log("Sum of 10 and 20 is" + (a+b));// apply bracket Bodmass Rule

// Type coercion 
console.log("1"+1); // js engine convert string into number

// let age = prompt("what is your age") // always give values in double quotes
// console.log(age); // type string

    // swaping

// let A = 10
// let B = 20
// // A= A+B // 30
// // B= A-B // 10
// // A= A-B
// // console.log(A,B);

// [A, B] = [B, A]; // ✅ Correct way // destructuring method

// console.log(A, B); // Output: 20 10

// in programing devision always givs us questiont here use math.floor for single value 
// and mod % always give remainder

let e = 4567
console.log(e%10); // it alwas return last value and if we want two number then add 1 more 0 to console
console.log(Math.floor(e/10)); // if we want first values then use / and get its math.floor value 

let Ab = 4 // assign 
12 == 12 // value checking operator
12 === 12 //checking values with its data type

  // unary operator
// ++ --

let q = true // in here js call true as a 1 and for false is always treat as a 0 
q++
console.log(q);

console.log(Math.round(10.3)); // belove .5 it convert into 10 and above 5 it converted into 11
console.log(Math.ceil(10.1)); // if any point value occur its convert into next value into 11
console.log(Math.floor(10.8)); // convert to fixed value into 10
console.log(Math.trunc(10.8)); // remove the decimal points works like floor
console.log(Math.pow(2,5)); // 2^5 its gets power of first integers
console.log(Math.sqrt(16)); // find squre root
console.log(Math.cbrt(63)); // find cube root

function Cuberoot(n){
    return  n** (1/3)
}                            // another for cuberoot for using function
console.log(Cuberoot(27));

console.log(Math.abs(-15)); // convert negative to positive
console.log(Math.max(11,2587,12,456)); // return max value
console.log(Math.min(11,2587,12,456)); // return min value
console.log(Math.floor(Math.random()*9000)+1000);

let y = 12.233256
console.log (y.toFixed(2)); // give require number after decimal point and its type is string

//Q1 calculate area and perimeter of ractangle

let length = 5
let breadth = 4
console.log(length*breadth); // area
console.log(2*(length*breadth));

//Q2 area of triangle by herons  formula
let m =5
let n =4
let p =3

let s = (m+n+p)/2
console.log(s);
// a+b> c || a+c> b
console.log(Math.sqrt(s * (s-m) * (s-n) * (s-p)));

//Q3 Circumference of circle

let r = 12
console.log(Number(2*Math.PI*r).toFixed(2));







