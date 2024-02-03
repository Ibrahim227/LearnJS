// alert("This is an external test file!!!");


// let admin;
// let name;

// name = '"Jhon"';
// admin = name;
// alert(admin);


// let PlanetEarth;
// let CurrentUser;

// let BinaryTest, OctalTest;
// BinaryTest =  0b00001100101000101001100;
// OctalTest = 0O1222233347;
// alert(berea);
// alert(OctalTest)
// // console.log(berea);

// let TestBigIntNotationHexa;

// TestBigIntNotationHexa = 0x123243525ABCDEFn;
// alert(TestBigIntNotationHexa);

// let TestBigIntNotationLiteral;

// TestBigIntNotationLiteral = 1234456789n;
// alert(TestBigIntNotationLiteral);

// let NumericSeparator;

// NumericSeparator = 0b0_1000000_00000000_00000000_00000000_00000000_00000000_00000000_00000000n;

// alert(NumericSeparator);

// console.log('Hello, world!\f');

// let TestCal; // declare variable named TestCal

// TestCal = 5e2;
// alert(TestCal); // print the result of 5 exponent 2
// alert(100e3); // print the result of 100 exponent  3

// alert(0x1234567ABDEFn); // print the result of  hexadecimal number as Bigint
// alert("\xA9");
// let result = (500 * 500);
// alert(`the result is: ${result}`);
// alert(typeof 0);
// alert(typeof 'Mike');
// alert(typeof null);
// alert(typeof alert);
// alert(typeof undefined);
// alert(typeof Map);
// alert(typeof Array);
// alert(typeof encodeURI);
// alert(typeof(Math));


// let SysPrompt = prompt('Please Confirm Your Password:');
// while (SysPrompt == '1234'){
//     alert(`Password entered successfully`, {SysPrompt})
//     break;
// }
// while (SysPrompt != '1234'){
//         alert(`Password not entered Correctly`, {SysPrompt});
//         break;
//     }

// // NameSurname = prompt(title, [default]);
// let isYou = confirm('Please are you a human?');
// while (isYou){
//     alert(isYou);
//     break;
// }


// let EnterName = prompt('Enter your name:');
// alert(`Your name is: ${EnterName}`);


// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// let jug = "123";
// alert(typeof jug);

// jug = Number(jug);
// alert(typeof jug);


// let strange = Number("A strange way to convert a string to a number!!! Won't work");
// alert(strange); // "A strange way to convert a string to a number return NaN 

// let value = true;
// alert(typeof value); // return value type: "boolean"

// let newValue = String(value);
// alert(typeof newValue); // return value type: "String"

// let x = 2;
// x = -x; // unary operation
// // alert(typeof x); // return value type: "unary operation occurred"
// alert(x); // return value type: "unary operation"

// let result = 5 ** 10; /* Long comments */
// alert(`the result of "5**10" is : ${result}`); // return result 

// alert(1 + "001");
// alert(`string and integer concatenation: ${'a' + result}`);

// alert(`Operation with a string concatenation and an integer: ${'1' + 0 + 0 + '2' + '3' + '4' + '5' + '6' + 100 + 200 + result}`)

// let a = '3';
// let b = '5';

// alert(+a + b);

// c = d = e = 2 * 4;
// alert(`c = ${c} b = ${b}, c + b = ${c + b}, c + b = ${+c + +b}`);

// let c = 3;
// alert(a === c);

// alert(null === undefined); 
// alert('Gluee' > 'Ga');

// alert("Z" >= "A");

// alert(0 !== false); // strict equality check
// alert(0 === true);

// let NameEnter = prompt('Enter Name: ');
// if (NameEnter == 'Ibrahim' || "ibrahim" || 'Sani' || 'ibrahim Sani'){
//     alert('Welcome to the Internet');
//     alert("You're so smart than expected")
// }

// let MyYear = prompt('Enter Year of birth:');
// if(MyYear < 1998){
//     alert('Too old');
// } else if(MyYear > 1998) {
//     alert("too young");
// }else {
//     alert("You got it right now");
// }

// let AuthorizationAge = prompt('Enter AuthorizationAge:');

// if (AuthorizationAge >= 18){
//     AuthorizationAge = "You're a Major, come on in!";
// } else if(AuthorizationAge == 16) {
//     AuthorizationAge = "You have to reach 18 and you're 2years far, access refused!";
// } else if(AuthorizationAge < 18){
//     AuthorizationAge = "You' a Minor, come back after you reach 18, access refused!";
// }
// alert(AuthorizationAge);

// let Number = prompt("Enter number:", '');
// if (Number < 0){
//     alert(-1);
// } else if (Number == 0){
//     alert(0);
// } else {
//     alert(1);
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == 'Manager') ? 'Yeah' : (login == 'President') ? 'Welcome Boss';


// let a = 19;
// let b = 20;

// result = a || b;
// alert(result);

// alert(1 || undefined || null);

// let age = prompt("Enter your age:", '');

// if(!age <= 14 && 90){
//     alert("Age must be between 14 and 90");
// } else if(age <= 14 && age <= 90){
//     alert("Age is between 14 and 90");
// }

// let EnterLogin = prompt("Enter your Login:", '');

// if(EnterLogin == 'Admin'){
//     let PasswordEnter = prompt("Enter your Password:", '');
//     if(EnterLogin == 'Admin' && PasswordEnter == 'TheMaster'){
//         alert("Welcome");
//     } else if(EnterLogin == 'Admin' && PasswordEnter != 'TheMaster'){
//         alert("Wrong Password");
//     }
// }  else if (EnterLogin == '' || EnterLogin == null){
//     alert("Canceled");
// } else {
//     alert("I don't know you");
// }


// let i = 0;

// while (i < 3) {
//     alert(i);
//     i++;
// }

// let j = 3;
// while(j) alert(j--);

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);


// for(; i < 5;) {
//     alert(i);
//     i++;
// }

// for (let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     alert(i);
// }

// outer: for (let a = 0; a < 10; a++){
//     for (let b = 0; b < 10; b++) {
//         let input = +prompt(`Enter value at: ${a},${b}`);
//         if (!input) {
//             alert("First LOOP stopped!!");
//             break outer;
//         }
//     }
// }

// let i = 0;

// while(i < 5){
//     alert(`number: ${i}!`);
//     i++;   // console output
// }

// let input = +prompt('Enter value:');

// while(input <= 100){
//     prompt("Enter value:");
//     if (input > 100) {
//         alert(`Number: ${input}`);}
//     break;
// }

// let a = +prompt('Enter value');

// switch(a){
//     case 1:
//         alert(`Number: ${a}`);
//         break;
// }

// alert('zelcomplex');


let NewUser = {name: "Ibrahim",
age:30,
};

let admin = NewUser;

admin.name = "ZuluTchiang";
alert(admin.name);

let user = {
    name: "Ibrahim",
    age: 25,

    sayHi(){
        alert(this.name);
        alert(this.age);
    }
};

user.sayHi();
