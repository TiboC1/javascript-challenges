/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", async function(){

        const arr = await fetch("../../08-asynchronous/_shared/api.json");
        let heroes = await arr.json();
        let lol = Object.values(heroes)
        let omegaLol = lol[0]
        let input = document.getElementById("hero-id").value;
        let index = input - 1
        
        if (index < omegaLol.length) {
            omegaLol.splice(index, 1)
            console.log(omegaLol)
        } else {
            console.log(`There are only ${omegaLol.length} number of xmen.`)
        }

    })

})();
