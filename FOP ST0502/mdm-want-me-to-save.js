//shared stuff
const Input = require("readline-sync");
console.clear();

prac_7_11();

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


function prac_5_8() {
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

function prac_7_7() {
    class ClubMember {
        constructor (name, members, fees) {
            this.name = name;
            this.members = members;
            this.fees = fees;
        }

        foreigner() {
            return (this.fees/100*110);
        }
    }

    

    var club1 = new ClubMember("Sports", 1600, 50)
    var club2 = new ClubMember("Community Service", 1200, 0)
    var club3 = new ClubMember("SFoodies", 800, 100)

    console.log(`The fees for ${club1.name} is: ${club1.fees}`)
    console.log(`The fees for ${club2.name} is: ${club2.fees}`)
    console.log(`The fees for ${club3.name} is: ${club3.fees}`)
    console.log(club1.foreigner())

}

function prac_7_8() {
    class Rectangle {

        constructor (length, width) {
            this.length = length;
            this.width = width;
        }

        getArea() {
            return (this.length * this.width);
        }

        getPerimeter() {
            return (this.length*2 + this.width*2);
        }
    }

    var r1 = new Rectangle(10, 5);
    console.log(`Area of rectangle r1 is ${r1.getArea()}`);
    console.log(`Perimeter of rectangle r1 is ${r1.getPerimeter()}`);
}

function prac_7_9() {

    class Circle {

        constructor(radius) {
            this.radius = radius;
        }

        getArea() {
            return (Math.PI * (this.radius **2))
        }

        enlargeCircle() {
            this.radius = this.radius * 3;
        }

        shrinkCircle() {
            this.radius = this.radius / 2;
        }
    }

    var circle1 = new Circle(2);
    console.log(`Area of circle1 with radius ${circle1.radius} is ${circle1.getArea()}`);
    circle1.enlargeCircle()
    console.log(`\nCircle is enlarged 3 times`);
    console.log(`Area of circle1 with radius ${circle1.radius} is ${circle1.getArea()}`);
    circle1.shrinkCircle()
    console.log(`\nCircle is shrunk by halve`);
    console.log(`Area of circle1 with radius ${circle1.radius} is ${circle1.getArea()}`);
}

function prac_7_10() {

    class BankAccount {
        constructor(name, savings) {
            this.name = name;
            this.savings = savings;
        }

        getBalance() {
            return (`${this.name} has $${this.savings}`);
        }
    }

    var person1 = new BankAccount("Oliver Twist", 1000.00);
    var person2 = new BankAccount("Richie Rich", 100000.00);

    console.log(person1.getBalance());
    console.log(person2.getBalance());
}

function prac_7_11() {
    class Fan {
        constructor(speed, on) {
            this.speed = speed;
            this.on = on;
        }

        getState() {
            var fan_speed
            switch(this.speed){
                case 1: {
                    fan_speed = "low";
                    break;
                }
                case 2: {
                    fan_speed = "medium";
                    break;
                }
                case 3: {
                    fan_speed = "High"
                    break;
                }
            }
            if (this.on) {
                return (`on at ${fan_speed} speed`);
            } else {
                return (`off`)
            }
        }
    }

    var fan1 = new Fan(1, true);
    var fan2 = new Fan(3, true);

    console.log(`Fan 1 is ${fan1.getState()}.`)
    console.log(`Fan 2 is ${fan2.getState()}.`)

    fan1.on = false;
    fan2.speed = 2;

    console.log()
    console.log(`Fan 1 is ${fan1.getState()}.`)
    console.log(`Fan 2 is ${fan2.getState()}.`)
}