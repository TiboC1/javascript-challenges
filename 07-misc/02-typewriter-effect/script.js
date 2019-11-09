/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let input = `Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans
    les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ?
    Habite-t-il au 21 ? Que de mystères !`

    target.innerHTML=("");
    let i = 0;
    
    function typewriter(){
        let interval = Math.floor(Math.random()*500);
        if (i < input.length){
            target.innerHTML += input.charAt(i);
            i++;
            setTimeout(typewriter, interval)
        }
        console.log(interval)
    }
    typewriter()

})();
