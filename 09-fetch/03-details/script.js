/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const run = document.getElementById("run").addEventListener("click",async function(){

        let input = document.getElementById("hero-id").value;
        let target = document.getElementById("target")
        let id = JSON.parse(input, 10)
        let arr = await fetch("../../08-asynchronous/_shared/api.json");
        let heroes = await arr.json();
        console.table(heroes);
        
        let lol = Object.values(heroes)
        let length = lol[0].length - 1
        lol[0].forEach(element => {
            console.log(length)
            if( id <= length){
                if( element.id == id){
                    target.innerHTML = `The name of this xman is ${element.name}`
                }
            } else {
                target.innerHTML = `There is no xman with this ID. there are only ${length} xmen.`

            }
        })
    })

})();
