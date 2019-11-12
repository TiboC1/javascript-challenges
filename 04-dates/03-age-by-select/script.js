/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


function calculate_age(dob) {
    let age = new Date() - dob;
    let age2 = new Date(age)
    let finalAge = Math.abs(age2.getUTCFullYear() - 1970);
    alert(finalAge)
}

document.getElementById("run").addEventListener("click", function(){

    let day = document.getElementById("dob-day").value
    let month = document.getElementById("dob-month").value
    let year = document.getElementById("dob-year").value
    let dob = new Date(year, month, day)
    calculate_age(dob)
})
})();
