/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function createTable(){

        let target = document.getElementById("target");
        let tbl = document.createElement("table");
        let x = 0,
            y = 0;
    
        for(let i = 0; i < 10; i++){
            let tr = tbl.insertRow();
                x = x + 1
                y = 0
                for(let j = 0; j < 10; j++){
                    let td = tr.insertCell();
                    y = y + 1
                    let sum = x * y;
                    td.appendChild(document.createTextNode(sum))
                }
        }
        
        target.appendChild(tbl)
        
    }
    
    createTable()

})();
