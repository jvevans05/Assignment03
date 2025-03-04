//it's a triangle man

//could just hard code this to 7, but where's the fun in that?
let howBig = prompt('how big do you want your triangle?', 7)
//got an undefined if I didn't set display to a string
let display = ''

for (i = 0; i < howBig; i++) {
    
    //concatenate one pound sign to display per loop and then console log it.
    display += '#'
    console.log(display)

}