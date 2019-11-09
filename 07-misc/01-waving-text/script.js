/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let target = document.getElementById("target");
let input = target.textContent;
target.innerHTML=("")
let arr = input.split("");
let size = 14
let counter = 0
arr.forEach(wave)

function wave(element){

    let span = document.createElement("span")
    span.innerHTML = element
    if(counter < 16){
        size += 3;
        counter += 1
    } else if (counter >= 16 && counter <= 30){
        size -= 3
        counter += 1
    } else if (counter > 30) {
        counter -= 30
    }
    
    span.style.fontSize = size + "px";
    target.appendChild(span)
}

})();
