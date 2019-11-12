/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    
let carousel = document.getElementsByTagName("img")[0]

let i = 0

let next = document.getElementById("next").addEventListener("click", function(){
        i = i + 1
        carousel.src = gallery[i]
        if (i >= gallery.length - 1){
            i = 0
        }
    })
})();
