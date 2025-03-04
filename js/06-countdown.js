//get an init value from user. no negatives. no fractions. while cannot be infinite.

//seconds in a year. don't leave the default value. It quit for me at 30,973,024.
let countdown = parseInt(Math.abs(prompt('Please enter a countdown number:', 31536000)))

while (countdown >= 0) {

    console.log(countdown)
    //iterate down by one
    countdown--

}

console.log('Happy New Year!')