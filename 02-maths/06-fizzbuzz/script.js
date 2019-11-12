/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



document.getElementById("run").addEventListener("click", function() {
    let input = prompt("type a number between 1 and 100.")
    let remainderOne = input % 3;
    let remainderTwo = input % 5;
    console.log(remainderOne);
    console.log(remainderTwo)
    const calculate = input => {
        if (remainderOne === 0 && remainderTwo !== 0){
            console.log("fizz")
        } else if (remainderOne !== 0 && remainderTwo === 0) {
            console.log("buzz")
        } else if (remainderOne === 0 && remainderTwo === 0) {
            console.log("fizzbuzz")
        } else {
            console.log("get fucked bitch")
        }
    }
    calculate(input);

});

})();
