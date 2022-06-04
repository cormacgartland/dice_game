
function roll() {
    let die = document.getElementsByClassName("dice");
    var button = document.getElementById("button")

    for (let i = 0; i < die.length; i++) {
        var num = Math.floor(Math.random() * 6) + 1;
        die[i].innerHTML = num;
    }
    button.style.display = "none"
}


var total = 0;

function removeDie(id, div) {

    var removedDie = document.getElementById(id)
    var collection = document.getElementById(div.id)
    var totalAmount = document.getElementById("total")
    var diceNumber = removedDie.innerHTML;

    
    removedDie.style.display = "none";
    collection.style.display = "block"; 
    collection.innerHTML = diceNumber;


    var dieValue = parseInt(diceNumber);
    
    if (dieValue === 5) {
        total += 0;
    }
    else {
        total += dieValue;
    }

    totalAmount.innerHTML = "TOTAL: " + total;

    button.style.display = "block"
}


