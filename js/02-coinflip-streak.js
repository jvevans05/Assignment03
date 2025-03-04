//we init coinFlip
let coinFlip

//a do while loop that continues if we get heads
do {

    //make a random number and set it to 1 or 0
    let flip = Math.random()
    flip = Math.round(flip)

    //zero is heads. we set coinFlip here.
    if (flip == 0) {
        coinFlip = 'heads'
    }
    else {
        coinFlip = 'tails'
    }

    //print out the results. It will always end with tails since the loop does not continue.
    console.log(`You flipped ${coinFlip}!`)

} while (coinFlip == 'heads')

