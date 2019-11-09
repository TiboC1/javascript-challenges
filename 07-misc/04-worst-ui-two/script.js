/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let target = document.getElementById("target"),
    buttonOne = document.getElementById("part-one"),
    buttonTwo = document.getElementById("part-two"),
    buttonThree = document.getElementById("part-three"),
    buttonFour = document.getElementById("part-four");

    let one = 460
    let two = 0
    let three = 0
    let four = 0

    buttonOne.value = one;
    buttonTwo.value = ("0" + two).slice(-2);
    buttonThree.value = ("0" + three).slice(-2);
    buttonFour.value = ("0" + four).slice(-2);


    function update(){
        target.innerHTML = "+" + buttonOne.value + buttonTwo.value + buttonThree.value + buttonFour.value
        buttonOne.innerHTML = buttonOne.value
        buttonTwo.innerHTML = buttonTwo.value
        buttonThree.innerHTML = buttonThree.value
        buttonFour.innerHTML = buttonFour.value
    }

    buttonOne.addEventListener("click", function(){
        if (one < 499){
            one += 1
        } else {
            one = 460
        }
        buttonOne.value = one;
        update()
    })

    buttonTwo.addEventListener("click", function(){
        if(two < 100){
        two++
        } else {
        two = 0
        }
        buttonTwo.value = ("0" + two).slice(-2);
        update()
    })
    
    buttonThree.addEventListener("click", function(){
        if(two < 100){
            three++
        } else {
            two = 0
        }        
        buttonThree.value = ("0" + three).slice(-2);
        update()
    })
    
    buttonFour.addEventListener("click", function(){
        if(two < 100){
            four++
        } else {
            two = 0
        }        
        buttonFour.value = ("0" + four).slice(-2);
        update()
    })
    
})();
