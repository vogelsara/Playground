

function changeColor () {
    
    var randomValue = Math.random();
    console.log(randomValue);

     if (randomValue <= 0.2) {
        document.body.style.backgroundColor = "red";
    }else if (randomValue <= 0.4) {
        document.body.style.backgroundColor = "blue";
    } else if (randomValue <= 0.6) {
        document.body.style.backgroundColor = "yellow";
    }
    else{
        document.body.style.backgroundColor = "green";
    }

}

// Pass by value
// string, number, boolean

// Pass by reference
// array, object