function calculate(tip) {
    var bill = Number(document.getElementById("bill").value)
    var people = Number(document.getElementById("people").value)
    var tipAmount = (bill / 100 * tip / people).toFixed(2)
    var total = ((bill + (bill / 100 * tip)) / people).toFixed(2)

    if (bill && people) {
        document.getElementById("tip-result").innerHTML = "$" + tipAmount
        document.getElementById("total-result").innerHTML = "$" + total
    }

    if (people === 0) {
        errorState("people")
    }

    if (bill === 0) {
        errorState("bill")
    }

    // change reset color
    if (document.getElementById("total-result").innerHTML != "$0.00") {
        var reset = document.querySelector(".reset-btn")
        reset.classList.add("reset-active")
    }

    // check inputs

}

document.querySelector(".tip-1").onclick = function () {
    var tip = 5;
    calculate(tip);
}

document.querySelector(".tip-2").onclick = function () {
    var tip = 10;
    calculate(tip);
}

document.querySelector(".tip-3").onclick = function () {
    var tip = 15;
    calculate(tip);
}

document.querySelector(".tip-4").onclick = function () {
    var tip = 25;
    calculate(tip);
}

document.querySelector(".tip-5").onclick = function () {
    var tip = 50;
    calculate(tip);
}

var custom = document.getElementById("tip-6")

custom.addEventListener("input", function (e) {
    var tip = Number(e.target.value);
    calculate(tip);
})

// warning: Can't be zero

function errorState(get) {
    const billNum = document.getElementById("bill")
    const billError = document.getElementById("bill-error")
    const getBill = Number(document.getElementById("bill").value)

    const peopleNum = document.getElementById("people")
    const peopleError = document.getElementById("people-error")
    const getPeople = Number(document.getElementById("people").value)

    let state = get

    if (state === "bill") {
        if (getBill === 0) {
            billError.style.visibility = "initial"
            billNum.style.outline = "3px solid #ce8377"
            var zeroBll = document.getElementById("bill");
            zeroBll.addEventListener("focusin", function () {
                billNum.style.outline = "3px solid #ce8377";
            });
            zeroBll.addEventListener("focusout", function () {
                billNum.style.outline = "3px solid #ce8377";
            });
        }
        else {
            billError.style.visibility = "hidden"
            billNum.style.outline = "3px solid #73c6b9"
            var restBll = document.getElementById("bill");
            restBll.addEventListener("focusin", function () {
                billNum.style.outline = "3px solid #73c6b9";
            })
            restBll.addEventListener("focusout", function () {
                billNum.style.outline = "none";
            });
        }
    }

    if (state === "people") {
        if (getPeople === 0) {
            peopleError.style.visibility = "initial"
            peopleNum.style.outline = "3px solid #ce8377"
            var zeroPpl = document.getElementById("people");
            zeroPpl.addEventListener("focusin", function () {
                peopleNum.style.outline = "3px solid #ce8377";
            });
            zeroPpl.addEventListener("focusout", function () {
                peopleNum.style.outline = "3px solid #ce8377";
            });
        }
        else {
            peopleError.style.visibility = "hidden"
            peopleNum.style.outline = "3px solid #73c6b9"
            var restPpl = document.getElementById("people");
            restPpl.addEventListener("focusin", function () {
                peopleNum.style.outline = "3px solid #73c6b9";
            })
            restPpl.addEventListener("focusout", function () {
                peopleNum.style.outline = "none";
            });
        }
    }
}

const billInput = document.getElementById("bill")
billInput.addEventListener('input', () => errorState("bill"))

const peopleInput = document.getElementById("people")
peopleInput.addEventListener('input', () => errorState("people"))

// reset
var reset = document.querySelector(".reset-btn")

reset.addEventListener("click", function () {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip-6").value = "";
    document.getElementById("total-result").innerText = "$0.00";
    document.getElementById("tip-result").innerText = "$0.00";
    document.getElementById("bill").style.outline = "none";
    document.getElementById("people").style.outline = "none";
    document.getElementById("bill-error").style.visibility = "hidden";
    document.getElementById("people-error").style.visibility = "hidden";
})