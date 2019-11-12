/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
   let one = document.getElementById("op-one").value;
   let numberOne = parseInt(one, 10);
   let two = document.getElementById("op-two").value;
   let numberTwo = parseInt(two, 10);
   
   let sum = numberOne + numberTwo;
   let minus = numberOne - numberTwo;
   let multi = numberOne * numberTwo;
   let division = numberOne / numberTwo;



    document.getElementById("addition").addEventListener("click", function() {
        confirm(sum)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        confirm(minus)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        confirm(multi)
    });

    document.getElementById("division").addEventListener("click", function() {
        confirm(division)
    });
})();
