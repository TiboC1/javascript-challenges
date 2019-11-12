/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let pass = document.getElementById("pass-one");
    pass.addEventListener("input", function(){
        
    let input = pass.value;    
    let confirmation = document.getElementById("validity");
    let doubleD = /\d{2,}/;
        
    const validator = (i) => {
        if (i.length > 8 && i.match(doubleD)) {
            confirmation.innerHTML = "OK"
        } else {
            confirmation.innerHTML = "Not ok"
        }
    }
    
    validator(input)

    })


})();
