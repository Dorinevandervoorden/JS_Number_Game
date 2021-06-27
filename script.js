console.log("Hallo Winc Academy Studenten");

/* Requirements
1. Als gebruiker wil ik een intieel bericht zien die de gebruiker begroet en vraagt om zijn of haar naam.
2. Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken. 
3. Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]".
*/


let person = prompt("Welkom! Wat is je naam?", "Jouw naam");

if (person != null) {
  document.getElementById("person").innerHTML =
    "Welkom " + person + "! Hoe gaat het met jou?";
};

/*
4. Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer.
e.g. "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
5. Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()
6. Als gebruiker wil ik een nummer in kunnen voeren en vervolgens op enter klikken.
7. Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.
8. Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.
9. Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer"
*/

let randomNumber = Math.floor(Math.random() * 25 + 1);
console.log('random number', randomNumber)

document.getElementById("submitGuess").onclick = function () {
  let guess = document.getElementById("guessField").value;
  if (guess == randomNumber) {
    alert("Gefeliciteerd, je hebt gewonnen ");
    alert("Dag " + person + ". Tot de volgende keer")
  }
  else {
    alert("Dat is niet correct")
  };
};

