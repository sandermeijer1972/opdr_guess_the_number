var deelnemer = prompt("Hoe heet je?");
alert(deelnemer + ", welkom bij Raad het Getal!");
alert("Je gaat een door de computer gegenereerd getal raden. Je mag zelf de range bepalen waarin het getal zich moet bevinden.");
var min = prompt("Wat mag het laagste getal zijn?");
var max = prompt("Wat mag het hoogste getal zijn?");
if (max-min <= 10) {
    var kansen = 3
} else if (max-min <= 25) {
    var kansen = 5
} else if (max-min <= 100) {
    var kansen = 10
} else var kansen = 15;
alert("Oké " + deelnemer + ", je gaat een getal raden tussen " + (min - 1) + " en " + (parseInt(max) + 1) + ". Je krijgt daarvoor " + kansen + " pogingen.");
var teRadenGetal = Math.floor(Math.random() * (max - min + 1) + min);
var poging = 1;
while (gok != teRadenGetal && poging <= kansen) {
    var gok = prompt("Geef een getal:");
    alert("Poging " + poging + " van " + kansen + " is: " + gok);
    if(gok < teRadenGetal) {
        if(poging < kansen) {
            alert("Nee helaas, het getal dat je gokte was te laag. Probeer het opnieuw.");
            poging++;
        } else {
            alert("Nee helaas, het getal dat je gokte was te laag. We waren op zoek naar " + parseInt(teRadenGetal));
            poging++;
        }
    } else if(gok > teRadenGetal) {
        if(poging < kansen) {
            alert("Nee helaas, het getal dat je gokte was te hoog. Probeer het opnieuw.");
            poging++;
        } else {
            alert("Nee helaas, het getal dat je gokte was te hoog. We waren op zoek naar " + parseInt(teRadenGetal));
            poging++;
        }    
    } else if(gok == teRadenGetal) {
        alert("Jaaaa, goed geraden! " + teRadenGetal + " was het getal dat we zochten!");
    } 
 }

alert("Bedankt voor het meedoen " + deelnemer);


