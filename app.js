 //just practice, nothing else

const age= 10;
const name= 'Muntasir';
const rating= 5.5;
const double= false;
const grades= null;
const travel= undefined;
//initializing variable
let marriage;
//and defining the variable here
marriage= 'unmarried';

console.log(name);
console.log(age);

console.log(`My name is ${name}, and I am ${age}. My rating is ${rating}. My grades are ${grades}.`);
console.log(`I am ${marriage}`);

//arrays, defining car variable
const cars= [1, 2, 3, 4, 400, 599]; //making arrays, latest way....

//replacing values inside arrays
//replace second value (2)
cars[2] = 900;

//logging  cars
console.log(cars);

//finding out fifth value of the variable array cars
console.log(cars[5]);
// checking if any arrays exist....
console.log(Array.isArray(cars));

//to find out the position of any values in arrays inside any variables
console.log(cars.indexOf(400)); //answer would be 4

//----------------------------------------------------------------------------------------------------------------------------------

//defining myself
const person= {
    firstName: 'Muntasir',
    lastName: 'Alhuda',
    age: 18,
    nationality: 'BD',
    hobbies: new Array('programming', 'driving', 'gaming', 'cycling', 'reading', 'writing', 'learning'), //another way of making arrays
    address: {
        house: 43,
        road: 1,
        nameOfHouse: null,
        city: 'Ajman',
        streetName: '103 Omar Bin Al Khatab street',
        area: 'Nakheel 1',
    }
}
//adding variable to the person variable
person.email = '7652@domain.com';
//logging  person
console.log(person);

//pulling out variables out of a variable
const {firstName, lastName, nationality} = person;
//and loggging it
console.log(firstName, lastName, nationality);

//-----------------------------------------------------------------------------------------------------------------------

//making to-do  list. This is an example of arrays.

const todo = [
    {
        listNo: 'one',
        do: 'clean the room',
        done: false,
    },
    {
        listNo: 'two',
        do: 'fix the car',
        done: false,
    },
    {
        listNo: 'three',
        do: 'meeting with the boss',
        done: true,
    }
];

//defining second id from the todo variable (which is the second value of the array)
console.log(todo[2]);

//finding out the length of the array 'todo'
console.log(todo.length); //output: there are 3 arrays

//finding out the number of characters in any string (string properties)
console.log('Muntasir'.length); //there are 8 characters

//to make a string uppercase
console.log('Muntasir'.toUpperCase()); //same goes for lowercase, replace 'toUpperCase' with 'toLowerCase'
//to learn more about method, go to this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

//-------------------------------------------------------------------------------------A practice from codecademy------->
//current temperature in Kelvin degrees.
const kelvin = 273;
//current temperature in celsius
const celsius = kelvin - 273;
//current temperature in fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
//converting the decimal number to the whole number 
fahrenheit = Math.floor(fahrenheit);
//logging the temperature value in fahrenheit
console.log(`The temperature is ${fahrenheit} fahrenheit.`);

//Temperature in newton from celsius
let newton = celsius * (33/100)
newton = Math.floor(newton);
console.log(`The temperature is ${newton} newton.`)

//conditions
const show = true; 
if (show) {
    console.log('will watch next time');
} else {
    console.log('TIME TO WATCH!');
} //the show variable is false, hence the output would be 'will watch next time'.

//conditions using operators. There are various operators, ">", "<", "<=", ">=", "===" ...these are comparison operators...there are logical operators 
let thirstLevel = 10;

if (thirstLevel>=10) {
    console.log('WARNING!Drink some water to avoid kidney failure');
} else { 
    console.log('your thirst level is OK. Enjoy  :-)');
}

//let's make a car engine display which will show the battery charge in %, the amount of engine oil in % and amount of water in engine in %
 
let batteryCharge = 50;
let engineOil = 60;
let waterLevel = 0;

if (batteryCharge >= 50 && engineOil > 50 && waterLevel < 90 && waterLevel) {
    console.log('Your engine is working well, HAPPY DRIVING!');
} else {
    console.log('Your engine is not meeting all of the requirements, please check the meters.');
}

//Let's make an username for an accound using short-circuit method
let userName = null;
let defaultName = userName || 'New user';


if (userName === null) {
    console.log(defaultName);
} else {
   console.log(userName);
} //Output would be 'New user' since userName is null so its a falsy value.

//let's use else if statements

let numberOfPerson = 7;

if (numberOfPerson === 1) {
    console.log('Price would be 20 dollars.');
} else if (numberOfPerson === 2 || numberOfPerson === 3) {
    console.log('Price would be 40 dollars.');
} else if (numberOfPerson >= 4 && numberOfPerson <= 8) {
    console.log('Price would be 60 dollars.');
} else if (numberOfPerson >= 9) {
    console.log('Price would be 80 dollars.');
} else {
    console.log('Price would be 120 dollars.');
}

//Another way of writing the above command is by using the switch method 

let numberOfPeople = 8;

switch (numberOfPeople) {
    case 1:
        console.log('Price would be 20 dollars.');
        break;
    case 2 || 3:
        console.log('Price would be 40 dollars.');
        break;
    case 4 && 8:
        console.log('Price would be 60 dollars.');
        break;
    case 9:
        console.log('Price would be 80 dollars.');
        break;
    default:
        console.log('Price unavailabe, please contact the cashier for details.');
        break;
}

//Above,,is the alternative way of else if, the comparison operators does not work with this, only logical operators work.
//---------------------------------------------------------------------------------------------------------------------------------------
//let's create a race terminal for the racers
/*
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
 */

 //let's create  runner's race number
 let raceNumber = Math.floor(Math.random() * 1000);
 //checking if the adult participant has registered early or late
 let early = false;
 let racerAge = 19;

 //adjust the race number for adults(late and early) and youth
 if (racerAge > 18 && early) {
    raceNumber += 1000;
 } else {
    raceNumber
 }

 //now let's display the registration number depending on their age and registration time
 if (racerAge > 18 && early) {
    console.log(`your race will start at 9:30am, your race number is ${raceNumber}`);
 } else if (racerAge > 18 && !early) {
    console.log(`your race will start at 11:00am, your race number is ${raceNumber}`);
 } else if (racerAge < 18) {
    console.log(`your race will start at 12:30pm, your race number is ${raceNumber}`);
 } else {
     console.log('Please visit the registration desk.');
 }
//--------------------------------------------------------------------------------------------------------------------------------------------
//now let's move to function............................
//let's make a function which sends greetings to new users
function greetings(name = 'New User') {
    console.log(`Welcome ${name}. To get started, click here`);
}
//by default, we assigned the user's name to 'New user' in case if the user has not registered for an account. We can replace the default name by doing the following step
greetings('John');

//we can also use this method to work out the area of a rectangle, but this time we are going to use another method
function rectArea(width, height) {
    let area = width * height;
    return width * height;
}
//here, the 'return' keyword returns the answer 
console.log(rectArea(50, 50)); //if we use 'return' keyword, we need to log the function in order to print the value. 

//let's try it by using the old method
function rectangle (row, column) {
    console.log(column * row);
}

rectangle(50, 50); //and the output would be the same! 2500

//functions can also be used to perform a complicated task and by using functions, it can be made simpler.
//let's look at an example. 
//Let's say there is a field trip and teachers need to find out how many buses they are going to need which depends on the number of students.

//let's make a function of number of students
function numberOfStudents (row, column, classes) {
    return row * column * classes;
}

function numberOfBus (row, column, classes) {
    return numberOfStudents(row, column, classes) / 50;
}

console.log(numberOfBus(4, 5, 6)); //2.4 (means 3) buses they are going to need 3 buses

//let's do a project
//this time we are going to use the funciton in a different way which is the new way of using the function,
//here, instead of using function, we are using the arrow sign "=>". We can also remmove the parantheses around the parameters if it has single value.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
        return userInput;
    } else {
        console.log('There is an error');
    }
}
//console.log(getUserChoice('rock')); //this was just for testing the above commands...

/* now, we need to set up a computer in it which will make a random choice. To do that, we can make a function which will generate
a random number from zero to one and we will set it up to convert these decimal numbers to the whole number and mutiply it with 3 since there are three choice
*/

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
}

//now we need to define a funciton which will determine the winner of this game
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Game was a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        }
    } else {
        return 'User won!';
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissor') {
            return 'Computer won!';
        }
    } else {
        return 'User won!';
    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        }
    } else {
        return 'User won!';
    }    
}

//now, we need to start the game and log the result and display who won, and this how we do.
const playgame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();

    console.log(`Your choice is ${userChoice}`);
    console.log(`Computer's choice is ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
}

playgame(); //and it works


const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
	let days;
  if (event === 'Marathon') {
		days = 55;
  } else if (event === 'Triathlon') {
		days = 45;
  } else if (event === 'Pentathlon') {
		days = 78;
  }

  return days;
};
let Name = 'Nala';
// The scope of `name` is too tight 
const logEvent = (event, Name) => {
  console.log(`${Name}'s event is: ${event}`);
};

const logTime = (days, Name) => {
  console.log(`${Name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event, Name);
logTime(days, Name);
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(event2, name2);
logTime(days2, name2);

//-------------------------------------------------------------------------------------------------------------------
//let's make a loop
//basic loop: lets make a loop that the output would be number below 10...
for (let range = 0; range < 10; range ++) {
    console.log(range);
}
//output would be  0, 1, 2, 3, 4, 5, 6, 7, 8, 9...

//the first part of the for loop is defining a variable. The second part is condition for stopping the loop....

//------
//let's make an advanced loop....
const routine = ['Clean', 'Work', 'Play'];
for (let i = 0; i < routine.length; i++) {
    console.log(`I have to ${routine[i]}`);
}

console.log(routine.length);

//lets make nested loop.....
//lets compare 2 persons hobby, and print them when they are common.....
let samsHobby = ['Jogging', 'Gaming', 'Coding', 'Driving'];
let johnsHobby = ['Driving', 'Swimming', 'Working', 'Marathon'];
const mutualHobby = [];

for (i = 0; i < samsHobby.length; i++) {
    for (j = 0; j < johnsHobby.length; j++) {
        if (samsHobby[i] === johnsHobby[j]) {
            mutualHobby.push(samsHobby[i]);
        }
    }
}
console.log(`Sam and John have ${mutualHobby} in common`);
//-----output would be driving since driving is in common........
//----lets use while loop...........
//......we use while loop when we are uncertain about the limit........
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

/*while (currentCard = 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}
*/
