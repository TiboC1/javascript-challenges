/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", function(){
let input = document.getElementById("year").value

let monthsWithF13 = []

function Fridaythe13thsIn(input) {
    for (let month=0; month<12; month++) {
        let date = new Date(input,month,13);
        if(date.getDay() == 5){
            switch (month) {
                case 0:
                  monthName = "January";
                  break;
                case 1:
                  monthName = "February";
                  break;
                case 2:
                   monthName = "March";
                  break;
                case 3:
                  monthName = "April";
                  break;
                case 4:
                  monthName = "May";
                  break;
                case 5:
                  monthName = "June";
                  break;
                case 6:
                  monthName = "July";
                  break;
                case 7:
                  monthName = "August";
                  break;
                case 8:
                  monthName = "September";
                  break;
                case 9:
                  monthName = "October";
                  break;
                case 10:
                  monthName = "November";
                  break;
                case 11:
                  monthName = "December";
                  break;
              }
          monthsWithF13.push(monthName);
       }
    }                            
}
Fridaythe13thsIn(input)
alert(monthsWithF13)
})

})();
