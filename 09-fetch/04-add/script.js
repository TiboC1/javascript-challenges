/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const run = document.getElementById("run").addEventListener("click", async function(){

        const name = document.getElementById("hero-name").value;
        const alterEgo = document.getElementById("hero-alter-ego").value;
        const power = document.getElementById("hero-powers").value;
        let abilities = []
        abilities.push(power)
        

        const arr = await fetch("../../08-asynchronous/_shared/api.json");
        const heroes = await arr.json();
        let lol = Object.values(heroes)
        let length = lol[0].length
        
        let newObj = {
            id: lol[0].length,
            name: name,
            alterEgo: alterEgo,
            abilities: abilities
        }
        lol[0].push(newObj)
        console.log(heroes)
        console.log(newObj)
        console.log(lol[0])

    })
})();
