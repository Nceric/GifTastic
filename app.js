
const undead = ["skeletor", "kelthuzad", "lich king", "zombie", "freddy krueger", ];


function summonUndead() {
    const smnUD = this.getAttribute("data-name");
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + smnUD + "&api_key=VMHWOaSRDKW6OipJVWPzNh9sxy5QxfSe&limit=10&rating=G";

    fetch(queryURL)
    .then(function (response) {
return response.json();
    }).then(function(responseJson) {
        
        
        
    });
}

function renderButtons() {

    document.getElementById("buttons").innerHTML = "";

    for (let i=0; i < undead.length; i++) {

        const necro = document.createElement("button");
        necro.classList.add("ud");
        necro.setAttribute("data-name", undead[i]);
        necro.innerHTML = undead[i];

        document.getElementById("buttons").append(necro);

        necro.addEventListener("click", summonUndead);
    }

    }


    document.getElementById("addUndead").addEventListener("click", function(event) {
event.preventDefault();

const smnUD = document.getElementById("addUndead").value.trim();

undead.push(smnUD);
console.log(undead);

renderButtons();
});

renderButtons();
