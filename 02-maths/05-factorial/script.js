/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
    let input = document.getElementById("number").value;
    const factorial = lol => {
        let total =1;
        for(i = 1; i<=lol; i++){
          total = total *i;
         console.log(total)
        }
        return total;
      }
    document.getElementById("run").addEventListener("click", function() {

        
        factorial(input);

    });

})();
