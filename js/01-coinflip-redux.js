//not sure what we're doing with coinFlip, but we get the number of flips from the user
let coinFlip
let numFlips = parseInt(prompt("how many time do you want to flip the coin?"))

//set up the for loop to iterate through numFlips
for (i = 0; i < numFlips; i++ ) {

    //make a random number and set it to 1 or 0
    let flip = Math.random()
    flip = Math.round(flip)

    //zero is heads. print to console log
    if (flip == 0) {
        console.log("It's Heads!")
    }
    else {
        console.log("It's Tails!")
    }

}