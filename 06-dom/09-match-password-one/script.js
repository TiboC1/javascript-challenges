/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


let run = document.getElementById("run").addEventListener("click", function(){

    let one = document.getElementById("pass-one");
    let two = document.getElementById("pass-two");

    if( one.value == two.value) {
        one.style.borderColor = "green";
        two.style.borderColor = "green";
    } else {
        one.style.borderColor = "red";
        two.style.borderColor = "red";
    }

})

})();
