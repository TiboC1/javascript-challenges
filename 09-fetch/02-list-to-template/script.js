
/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let target = document.getElementById("target")

    const run = document.getElementById("run").addEventListener("click",async function(){

        let arr = await fetch("../../08-asynchronous/_shared/api.json");
        let heroes = await arr.json();
        let lol = Object.values(heroes)
        lol[0].forEach(element => {
           let li = document.createElement("li")
           let textnode = document.createTextNode(`Name: ${element.name}, abilities: ${element.abilities[0]} and ${element.abilities[1]}, AlterEgo: ${element.alterEgo} `)
           li.appendChild(textnode)
           let br = document.createElement("br")
           target.appendChild(li)
           target.appendChild(br)
           console.log(element)

        });;
    })

})();
