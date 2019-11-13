/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function(){
        
        async function asyncCall(){
            const result = await window.lib.getPosts();
            console.table(result);
            result.forEach(element => {
               async function second(){ 
                const res = await window.lib.getComments(element.id)
                     console.log(res)
                }
                second()
            })
        }
        asyncCall()
    })

})();
