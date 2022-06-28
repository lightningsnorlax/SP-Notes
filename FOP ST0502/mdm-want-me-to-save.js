//shared stuff
const Input = require("readline-sync");
console.clear();

var arr = [4, 2, 4, 7];
var r = arr.pop();
console.log(r, arr);
//code below

//prac 3b qn 6
let prac_3b_6 = () => {
    //declaration
    var numWidth;
    //data validation
    var userInput = Input.question("Enter the number you wish to see a pretty pretty triangle for: ");
    if (!(!isNaN(userInput) && userInput > 0 && userInput <= 10)) {
        numWidth = 3;
    } else {
        numWidth = parseInt(userInput);
    }
    //printing
    for (let i = 1; i < numWidth; i++) {
        console.log("#".repeat(i));
    }
    for (let i = numWidth; i > 0; i--) {
        console.log("#".repeat(i));
    }
}

//prac 4 qn 8
let prac_4_8 = () => {
    //declaration
    var a_input, b_input, print_stuff, first_line = "n\t";
    //input
    a_input = Input.questionInt("Enter first base value: ");
    b_input = Input.questionInt("Enter last base value: ");
    //printing first line
    for (let i = a_input; i <= b_input; i++) {
        first_line += "" + i + "\t";
    }
    //printing all the other stuff
    console.log(first_line);
    for (let y = 1; y<=25; y++) {
        print_stuff = "" + y + "\t";
        for (let x = a_input; x <= b_input; x++) {   
            print_stuff += (x*y) + "\t";
        }
        console.log(print_stuff);
    }
}


let prac_5_8 = () => {
    var intArray = new Array(50), oddArray = [], evenArray = [];
    for(let i = 0 ; i < intArray.length ; i++) {
        //generate a random integer between 1 & 100
        intArray[i] = Math.floor(Math.random() * 100) + 1;
    };

    //even odd
    for (let i of intArray) {
        if (i%2 == 0) {
            evenArray.push(i);
        } else {
            oddArray.push(i);
        };
    };
    console.log("Original Array :\n" + intArray.join(" ") + "\n\n" + "Even Numbers :\n" + evenArray.join(" ") + "\n\n" + "Odd Numbers :\n" + oddArray.join(" ")); 
};