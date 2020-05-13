// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *   counter 1 stores the function invocation having a global scope outside the function, whereas the counter 2 has it's own functional scope and it's not a variable.
 * 2. Which of the two uses a closure? How can you tell?
 *  counter 1 has closure because it contains another function that manipulated the same data from the parent function. counter 2 has closure too because it reaches outside of it's function scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter 1 would be in a scenario where we want to increment count within a functional scope and counter2 in the global scope in the whole script.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
    
  }
}

const counter1 = counterMaker();



// counter2 code
let count = 0;

function counter2() {
  return count++;
}




/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
   let generator = Math.floor(Math.random() * 2);
  
  return generator;
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numIning){
  
    var score = { };
  
   let homeTeamScore = callback*numIning*2;
   let awayTeamScore = callback*numIning;
 
  score.Home = homeTeamScore;
  score.Away = awayTeamScore;
  
    return score;
};

finalScore(inning(), 9);


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

let inningsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function scoreboard(callback, numInings) {
  
  let scoreByInning = [];
 
 
  
  return inningsArray.forEach( function(value, index) {
    
    
    console.log(`Value for loop ${value}, Index for loop ${index}`);
    
    let homeTeamScore = callback*value;
    let awayTeamScore = callback*numInings[index];
    scoreByInning.push(`innings: ${homeTeamScore} ` );
  })  
  
 

}

console.log(scoreboard(inning(), inningsArray))



