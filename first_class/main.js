



console.log("hello java script");
console.log("hello world");
console.log("Rayhan full stack Mern developer");
//javascript Datatype


let length=12;
let weight=2.88;
let body=length+weight;
console.log(body);

let color="black";
let lastColor="White";
let fullColor=color+lastColor;

console.log(fullColor);

let d=true;
let e=false;

console.log(e);

const person={

    firstName:"Rayhan",
    lastName:"Alam",
    age:28,



}

console.log(person);


const car=["toyota","bmw","nissan"];

console.log(car[0]);





// javascript variable
var x=10;
var  y=30;
var z=x+y;

console.log(z);


let a=30;
let b=20;
let c=a+b;

console.log(c);


let firstName='Ali';
let lastName='amzad';
let fullName=firstName+lastName;

console.log(fullName);

let bigInt = BigInt("123456789012345678901234567890");
console.log(bigInt);

let m=80;
let n=90;
let o=80;

console.log(m==n);





//javascript if else condition




const hour= new Date() .getHours();
let greeting;

if(hour <18 ){

greeting="good day";




}

else{
    greeting="good evining";
}

console.log(greeting);





const time= new Date().getHours();
let result;

if(time <10 ){

result="good morning";
}
else if(time<20){

result="good day"
}

else if(time<25)

result="good evining";
else{
    result="good night";
}
console.log(result);



//javascript switchcase

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Saturday";
      break;
    case 1:
      day = "sunday";
      break;
    case 2:
       day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
  }
console.log("Today is"+day);

let tex;
switch (new Date().getDay()) {
  case 6:
    tex = "Today is Saturday";
    break;
  case 0:
    tex = "Today is Sunday";
    break;
  default:
    tex = "Looking forward to the Weekend";
}

console.log(tex);


//javascript For Loop


let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

console.log(text);


const personIn = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += personIn[x] + " ";
}


console.log(txt);


//javascript whileloop

let texT = "";
let i = 0;
while (i < 10) {
  texT += "<br>The number is " + i;
  i++;
}

console.log(texT);




let texTi = ""
let l = 0;

do {
  texTi += "<br>The number is " + l;
  l++;
}
while (i < 10);  


console.log(texTi);

