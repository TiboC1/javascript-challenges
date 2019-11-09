/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    run = document.getElementById("increment"),
    target = document.getElementById("target");

    str_count = localStorage.getItem("count");
    if (str_count == null || str_count == "null"){
      count = 0;
    } else {
      count = parseInt(str_count);
    }

    target.innerHTML = count;

    run.addEventListener("click", function(){

        count++;
        target.innerHTML = count;
        localStorage.setItem("count", count);
    })
})();
