// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: ["B", "r", "a", "v", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain:
  // Output: ['B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '2']
  // Except for the slight syntax difference between " and ', I was correct.
  // <.split()> is a string method that takes a string and returns an array based on the pattern given in the argument. If the argument was left empty-
      // --> [Bravo 2022]
  // -because the pattern was undefined, so it returned the string in the form of an array.
// When the argument is (""), the return is as listed on line 15 because the pattern given to <.split()> is an undefined string. It goes within the string and splits it into an array of each individual character.
// If the argument given was <("r")>, the return would be-
  // --> [ 'B', 'avo 2022' ]
//- because the pattern given told <.split()> to look for "r" and give a return in the form of an array before and after any instance of the character "r".

//<.split()> is a useful in that you are able to turn a string into an array of individual characters and then use an array method to iterate on those characters. 
    // On one of our previous challenges, we were given a prompt to reverse the characters in a string. I used <.split("")> to turn a string into an array, <.reverse()> to reverse the array, then <.join(``)> to bring it back together as a string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: `Hello, LEARN Student!`
// b) Verify and explain:
  // Output: undefined
// I received an undefined output because the function `greeter` did not have the command <return> within the code block. I made a snap prediction without paying close enough attention.
// If it were to have a return line, my prediction would have been correct because the code block for <greeter> features a template literal.
  // A template literal allows for string interpolation using a <${placeholder}> to be replaced with what is entered into the function's argument

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:
// Output: [8, 10, 12, 14, 16]
  // My prediction was correct. <.map()> is an array method that iterates an argument on each element in array and returns the result as an array of equal length.
      // By taking an array and adding <.map(value => value * 2)>, the function looks at each value and returns it as the value multiplied by 2.

// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:
// Output: [11, 13, 15]
// My prediction was correct. <.filter()> is an array method that iterates on each element in an array and returns the elements that meet a true Boolean statement.
    // By taking an array and adding <.filter(value => value % 2 !== 0)>, the function looks at each element in an array. If the element's value is divisible by 2 and returns a remainder of anything except 0, it is included in the output array.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain:
// Output: "JavaScript"
    // My prediction was correct. The variable `myCodingSkills` is an object that houses four key:value pairs.
    // By invoking <myCodingSkills.languages[0]>, you are calling the variable `myCodingSkills` and the key `languages`. `languages` is paired with an array, and [0] invokes the element within the 0 index.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: [George, "Bravo", 2022]
// b) Verify and explain:
// Output: Learn { student: 'George', cohort: 'Bravo', year: 2022 }
// I was close, but my syntax familiarity with classes can be improved.
// In line 91, the variable learnStudent was assigned to the class Learn with an argument of "George".
    // Looking at the class Learn, it can take values for student name and return a student's name, cohort, and year, with cohort/year assumed to be "Bravo"/2022, respectively.