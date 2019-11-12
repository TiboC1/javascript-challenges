/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", function(){
    let finalArray = []
    for(let i = 0; i < 10; i++){
        finalArray.push(Math.floor(Math.random()*100+1))
    }
    document.getElementById("n-1").innerHTML = finalArray[0]
    document.getElementById("n-2").innerHTML = finalArray[1]
    document.getElementById("n-3").innerHTML = finalArray[2]
    document.getElementById("n-4").innerHTML = finalArray[3]
    document.getElementById("n-5").innerHTML = finalArray[4]
    document.getElementById("n-6").innerHTML = finalArray[5]
    document.getElementById("n-7").innerHTML = finalArray[6]
    document.getElementById("n-8").innerHTML = finalArray[7]
    document.getElementById("n-9").innerHTML = finalArray[8]
    document.getElementById("n-10").innerHTML = finalArray[9]

    const sum = arr => arr.reduce((a,b) => a + b, 0)

    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length

    document.getElementById("min").innerHTML = Math.min(...finalArray)
    document.getElementById("max").innerHTML = Math.max(...finalArray)
    document.getElementById("sum").innerHTML = sum(finalArray)
    document.getElementById("average").innerHTML = average(finalArray)

})
})();
