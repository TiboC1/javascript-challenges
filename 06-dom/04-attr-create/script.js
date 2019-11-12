/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
// creating new image element and assigning attr

   let target = document.getElementById("target");
   let image = document.createElement("img");
   target.appendChild(image)
   let source = document.createAttribute("src");
   source.value = "http://www.randomkittengenerator.com/cats/rotator.php";
   image.setAttributeNode(source);

// removing the original element

let old = document.getElementById("source");
old.remove();

})();
