let card = document.getElementById("card");
let output = document.getElementById("output");

let input = document.getElementById("input");
input.addEventListener("input",tham);

function tham() {
    let num = input.value;
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET",  "http://numbersapi.com/" + num);

    xhr.onload = function() {
        if(this.status === 200 && num !== "") {
             card.style.display = "block";
             output.innerText = this.responseText;
        }
    }

    xhr.send();

    if(num === "") {
        card.style.display = "none";
    }
} 

