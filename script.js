function calculate(tip) {
    var bill = Number(document.getElementById("bill").value)
    var people = Number(document.getElementById("people").value)
    var tipAmount = (bill/100*tip/people).toFixed(2)
    var total = ((bill+(bill/100*tip))/people).toFixed(2)

    document.getElementById("tip-result").innerHTML = "$" + tipAmount
    document.getElementById("total-result").innerHTML = "$" + total

    // change reset color
    if (document.getElementById("total-result").innerHTML != "$0.00") {
        var reset = document.querySelector(".reset-btn")
        reset.classList.add("reset-active")
    }
}

document.querySelector(".tip-1").onclick = function() {
    var tip = 5;
    calculate(tip);
}

document.querySelector(".tip-2").onclick = function() {
    var tip = 10;
    calculate(tip);
}

document.querySelector(".tip-3").onclick = function() {
    var tip = 15;
    calculate(tip);
}

document.querySelector(".tip-4").onclick = function() {
    var tip = 25;
    calculate(tip);
}

document.querySelector(".tip-5").onclick = function() {
    var tip = 50;
    calculate(tip);
}

var custom = document.getElementById("tip-6")

custom.addEventListener("keyup", function(e) {
    var tip = Number(e.target.value);
    calculate(tip);
})

// warning: Can't be zero
var billNum = document.getElementById("bill")

billNum.addEventListener("keyup", function(e) {
    var billError = document.getElementById("bill-error")
    var getBill = Number(e.target.value)
    
    if (getBill === 0) {
        billError.style.visibility = "initial";
        billNum.style.outline = "3px solid #ce8377";

        var zeroBll = document.getElementById("bill");
        zeroBll.addEventListener("focusin", function () {
            billNum.style.outline = "3px solid #ce8377"; 
        });
        zeroBll.addEventListener("focusout", function () {
            billNum.style.outline = "3px solid #ce8377"; 
        });

        if (e.target.value == "") {
            billError.style.visibility = "hidden";
            billNum.style.outline = "3px solid #73c6b9";

            var emptyBll = document.getElementById("bill");
            emptyBll.addEventListener("focusin", function () {
                billNum.style.outline = "3px solid #73c6b9"; 
            });
            emptyBll.addEventListener("focusout", function () {
                billNum.style.outline = "none"; 
            });
        }
    } 
    else {
        billError.style.visibility = "hidden";
        billNum.style.outline = "3px solid #73c6b9";

        var restBll = document.getElementById("bill");
        restBll.addEventListener("focusin", function () {
            billNum.style.outline = "3px solid #73c6b9"; 
        })
        restBll.addEventListener("focusout", function () {
            billNum.style.outline = "none"; 
        });
    }
})

var peopleNum = document.getElementById("people")

peopleNum.addEventListener("keyup", function(e) {
    var peopleError = document.getElementById("people-error")
    var getPeople = Number(e.target.value)
    
    if (getPeople === 0) {
        peopleError.style.visibility = "initial";
        peopleNum.style.outline = "3px solid #ce8377";

        var zeroPpl = document.getElementById("people");
        zeroPpl.addEventListener("focusin", function () {
            peopleNum.style.outline = "3px solid #ce8377"; 
        });
        zeroPpl.addEventListener("focusout", function () {
            peopleNum.style.outline = "3px solid #ce8377"; 
        });

        if (e.target.value == "") {
            peopleError.style.visibility = "hidden";
            peopleNum.style.outline = "3px solid #73c6b9";

            var emptyPpl = document.getElementById("people");
            emptyPpl.addEventListener("focusin", function () {
                peopleNum.style.outline = "3px solid #73c6b9"; 
            });
            emptyPpl.addEventListener("focusout", function () {
                peopleNum.style.outline = "none"; 
            });
        }
    } 
    else {
        peopleError.style.visibility = "hidden";
        peopleNum.style.outline = "3px solid #73c6b9";

        var restPpl = document.getElementById("people");
        restPpl.addEventListener("focusin", function () {
            peopleNum.style.outline = "3px solid #73c6b9"; 
        })
        restPpl.addEventListener("focusout", function () {
            peopleNum.style.outline = "none"; 
        });
    }
})

// reset
var reset = document.querySelector(".reset-btn")

reset.addEventListener("click", function() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip-6").value = "";
    window.location.reload();
})