/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target"),
    inputOne = document.getElementById("part-one"),
    inputTwo = document.getElementById("part-two"),
    inputThree = document.getElementById("part-three"),
    inputFour = document.getElementById("part-four"),
    buttonOne = document.getElementById("fix-part-one"),
    buttonTwo = document.getElementById("fix-part-two"),
    buttonThree = document.getElementById("fix-part-three"),
    buttonFour = document.getElementById("fix-part-four");

    let one = 460
    let two = 0
    let three = 0
    let four = 0
    
    inputOne.value = one;
    inputTwo.value = ("0" + two).slice(-2);
    inputThree.value = ("0" + three).slice(-2);
    inputFour.value = ("0" + four).slice(-2);

    function update(){
        
        target.innerHTML = "+" + inputOne.value + inputTwo.value + inputThree.value + inputFour.value
        inputOne.innerHTML = inputOne.value
        inputTwo.innerHTML = inputTwo.value
        inputThree.innerHTML = inputThree.value
        inputFour.innerHTML = inputFour.value
    }

    buttonOne.addEventListener("click", function(){

        one = Math.floor(Math.random()*39+460)
        inputOne.value = one
        update()
    })

    buttonTwo.addEventListener("click", function(){

        two = Math.floor(Math.random()*100)
        inputTwo.value = ("0" + two).slice(-2);
        update()
    })
    
    buttonThree.addEventListener("click", function(){

        three = Math.floor(Math.random()*100)
        inputThree.value = ("0" + three).slice(-2);
        update()
    })
    
    buttonFour.addEventListener("click", function(){

        four = Math.floor(Math.random()*100)
        inputFour.value = ("0" + four).slice(-2);
        update()
    })
    
})();
