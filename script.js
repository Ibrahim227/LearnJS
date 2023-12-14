alert("This is an external test file!!!");


let admin;
let name;

name = '"Jhon"';
admin = name;
alert(admin);


let PlanetEarth;
let CurrentUser;

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

let NumericSeparator;

NumericSeparator = 0b0_1000000_00000000_00000000_00000000_00000000_00000000_00000000_00000000n;

alert(NumericSeparator);

console.log('Hello, world!\f');

let TestCal; // declare variable named TestCal

TestCal = 5e2;
alert(TestCal); // print the result of 5 exponent 2
alert(100e3); // print the result of 100 exponent  3

alert(0x1234567ABDEFn); // print the result of  hexadecimal number as Bigint
alert("\xA9");
let result = (500 * 500);
alert(`the result is: ${result}`);
alert(typeof 0);
alert(typeof 'Mike');
alert(typeof null);
alert(typeof alert);
alert(typeof undefined);
alert(typeof Map);
alert(typeof Array);
alert(typeof encodeURI);
alert(typeof(Math));


let SysPrompt = prompt('Please Confirm Your Password:');
while (SysPrompt == '1234'){
    alert(`Password entered successfully`, {SysPrompt})
    break;
    while (SysPrompt != '1234'){
        alert(`Password not entered Correctly`, {SysPrompt});
        break;
}


// NameSurname = prompt(title, [default]);
let isYou = confirm('Please are you a human?');
while (isYou){
    alert(isYou);
    break;
}
