/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let rng = Math.floor(1 + Math.random()*100);
    let counter = 0;

    function game() { 

        let input = prompt("Guess a number between 1 and 100");
        let number = parseInt(input, 10)

        if (number == rng){
            counter += 1;
            alert(`Congrats, you guessed correctly. You used ${counter} guesses.`);
            console.log(number)
        } else if (number > rng){
            counter += 1;
            alert(`Sorry Kiddo. Guess again. You have to go lower`);
            game()
        } else if (number < rng){
            counter += 1;
            alert(`Sorry Kiddo. Guess again. You have to go higher`);
            game()
        }
    }

    game()

})();
