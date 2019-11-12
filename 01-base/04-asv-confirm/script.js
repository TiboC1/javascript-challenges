/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let age = prompt("Please fill in your age");
   let gender = prompt("What's your gender?");
   let hometown = prompt("What's your hometown?");
   let confirmed = confirm(`Is this information correct? your age: ${age}, your gender: ${gender}, your hometown: ${hometown}`)

   if (confirmed == true) {
       alert('Thanks')
   } else {
        document.location.reload()
   }
})();
