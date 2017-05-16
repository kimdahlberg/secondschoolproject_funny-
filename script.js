document.getElementById("myBtn").addEventListener("click", tText);


function tText() {

    var tFront = document.getElementById("fTextBox").value;
    var tBack = document.getElementById("bTextBox").value;

    if (tFront !== "Text för framsida" && tBack !== "Text för baksida") {
        document.getElementById("fText").innerHTML = tFront;
        document.getElementById("bText").innerHTML = tBack;
    }
    else if (tFront === "Text för framsida" && tBack !== "Text för baksida") {
        document.getElementById("bText").innerHTML = tBack;
    }
    else if (tFront !== "Text för framsida" && tBack === "Text för baksida") {
        document.getElementById("fText").innerHTML = tFront;
    }
    else {
        alert("Fyll i minst ett textfält");
    }

}

