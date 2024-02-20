console.log("HELLO PAPA PLATOON!")
//Math.random gives a decimal number from 0-1, simply multiply by 100 and floor it
//every time page refreshes a new num is generated
let number =Math.floor(( Math.random() * 100));
console.log("Number: "+ number)
//a new guess will not refresh, but will wipe the input field, inform the user if too high or low, gather each guess.
// Upon success a new Html Element should become present informing user of success and all guesses should be displayed 
let guesses = []
function submitForm(event){
    event.preventDefault();
    let guess = document.getElementById("guess").value
    console.log("Guess:" + guess)
    

    tooLow = document.getElementById("too-low")
    tooHigh = document.getElementById("too-high")
    correct = document.getElementById("correct")
    all_guesses = document.getElementById("guesses")
    

    if(guess==number){
        //display correct message
        correct.style.visibility = "visible"
        // display guessed values

        //start by creating a p tag
        let p_tag = document.createElement('p')
        //append all guesses from array to a string
        let all_guesses_string = "Numbers Guessed: "
        guesses.forEach((i)=>{
            all_guesses_string+=i +" "
        })
        //display this string in the p tag!!
        p_tag.textContent=all_guesses_string

        //place this p tag inside an existing tag!!
        all_guesses.appendChild(p_tag)
        
        //wait a few seconds before prompting user to play again. If ok then page refreshes
        setTimeout(() => {
            alert("Nice Job! Play Again?")
            window.location.reload()
        }, 4000);
        
        }
    else if(guess< number){
        //make it visible with a 3 second time out
        tooLow.style.visibility = "visible"

        setTimeout(() => {
            tooLow.style.visibility = "hidden"
        }, 3000)
        guesses.push(guess);
        }
    else{
        tooHigh.style.visibility = "visible"

        setTimeout(() => {
            tooHigh.style.visibility = "hidden"
        }, 3000);
        guesses.push(guess);
        }    
    }




