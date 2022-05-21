// ASSESSMENT 2: Coding Practical Questions with Jest

const { isTypedArray } = require("util/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

    // Create a function named evenThree
    // evenThree will take a number as an argument and decide if the number is even divisible by three or not

describe("evenThree", () => {
    it("takes a number as an argument and decides if the number is evenly divisible by three or not", () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(evenThree(15)).toEqual(`15 is divisible by three`)
        expect(evenThree(0)).toEqual(`0 is divisible by three`)
        expect(evenThree(-7)).toEqual(`-7 is not divisible by three`)
    })
})

                const num1 = 15
                // Expected output: "15 is divisible by three"
                const num2 = 0
                // Expected output: "0 is divisible by three"
                const num3 = -7
                // Expected output: "-7 is not divisible by three"

    // RED-GREEN Refactor:
    // 
    // RED:
    // ● evenThree › takes a number as an argument and decides if the number is evenly divisible by three or not
    //
    //ReferenceError: evenThree is not defined


// b) Create the function that makes the test pass.

    // create a function named evenThree as outlined in my test
    const evenThree = (value) => {
        if (value % 3 === 0) {
                // line 71 says it takes a value, divides it by 3, and if the remainder is 0...
            return `${value} is divisible by three`
                // ...return that the value is divisible by three
        } else {
                // if the value is anything other than evenly divided by 3...
            return `${value} is not divisible by three`
                // ...return that the value is not divisible by three
        }
    }

    // GREEN:
         // Refactor: The code is as simple as it can be and still be easily legible.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

    // Create a test that will meet the listed expected outputs with the variables provided.
    // The input are arrays with five elements of lower case strings
    // The expected output are arrays with five elements, but the first letter of each string is capitalized.

describe ("capFirst", () => {
    it(`takes an array of strings and returns an array with the first letter of each string capitalized`, () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
            // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
            // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

            const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
            // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
            const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
            // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.

    // create a function named capFirst
    // the function will need to iterate <.map()> over each element in an array
        // at each element, it will take the character at the 0 index <value[0]> and capitalize that letter <.toUpperCase()>
            //the function will then join that capitalized letter with the rest of the letters in the string <+ value.substring(1)>

const capFirst = (array) => {
    let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
    })
    return eachItem
}
    // GREEN:
        // I think this is as tidy a code as I can make.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

    // Create a named function () that takes in a string, looks at each character in the string, and logs the index of the first instance of a, e, i, o, or u.

// a) Create a test with expect statements for each of the variables provided. 


describe ("vowelTest", () => {
    it(`takes in a string and logs the index of the first vowel`, () => {
        const vowelTester1 = "learn"
             // Expected output: 1
        const vowelTester2 = "academy"
            // Expected output: 0
        const vowelTester3 = "challenges"
            // Expected output: 2
        expect(vowelTest(vowelTester1)).toEqual(1)
        expect(vowelTest(vowelTester2)).toEqual(0)
        expect(vowelTest(vowelTester3)).toEqual(2)
    })
})
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

const vowelTest = (value) => {
for(let i=0; i<value.length; i++){
    if(
        // value[i] === ("a" || "e" || "i" || "o" || "u")
            // The above syntax would return me the first instance of "a" and stop, so I had to rewrite it.
        (value[i] === "a") ||
        (value[i] === "e") ||
        (value[i] === "i") ||
        (value[i] === "o") ||
        (value[i] === "u")
    ){
      return i
    }
  }
}
    // GREEN: The above function works! It looks sloppy though.
    // REFACTOR:
        // I thought it would look cleaner if I used a .indexOf, but I still can't get the syntax written correctly 

// const vowelTest = (value) => {
// return value.indexOf("a" || "e" || "i" || "o" || "u")
// }

    // Like in the original function I wrote, this function would look at every character in a string and give me the first instance of "a" without checking the other vowels.