//similar to previous.

for (i = 1; i <= 100; i++) {
    
    //test for both true first, then put either true after. default message last.
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`Marco! Polo! \(${i}\)`)
    }
    else if (i % 3 == 0) {
        console.log(`Marco! \(${i}\)`)
    }
    else if (i % 5 == 0) {
        console.log(`Polo! \(${i}\)`)
    }
    else {
        console.log(`${i}`)
    }
    
}