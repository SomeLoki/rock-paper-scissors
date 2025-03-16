// confirm JS link is working
console.log("Link is established");

// need some global variables
let counternum = 0;
let one = 0, two = 0, three = 0, error = 0;

// function that grabs a random number between 1-3
// generates random between 0-1, multiplies by 3, resolves down to 0-2, adds 1 to get range 1-3.
function genRandom() {
  let randomnum = ((Math.floor(Math.random()*3)) + 1);
  return randomnum;
}
// make sure I am getting what I expect out of the function
// loop that tracks how many random numbers have been generated
// increment tracks for loop, and which number was generated
// as a catch all count how many numbers are outside of expected 
while (counternum < 100) {
  let randomnum = genRandom()

  if (randomnum == 1) {
    one = ++one;
    counternum = ++counternum;
  } else if (randomnum == 2) {
    two = ++two;
    counternum = ++counternum;
  } else if (randomnum == 3) {
    three= ++three;
    counternum = ++counternum;
  } else {
    error = ++error;
    counternum = ++counternum;
  }

}
// display results of the number counts
console.log(`Ones: ${one} Twos: ${two} Threes: ${three} Errors: ${error}`);