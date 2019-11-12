/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
    
        if( one.value != two.value) {
            one.className = "error"; 
            two.className = "error";
        } else {
            one.classList.remove("error");
            two.classList.remove("error");
        }
    
    })

})();
