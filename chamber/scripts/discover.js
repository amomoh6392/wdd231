import { places } from "../data/discover.mjs";


const container = document.querySelector("#discover-cards");


places.forEach(place => {

    const card = document.createElement("article");

    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
              <img src="images/${place.image}" 
            alt="${place.name}" 
            loading="lazy"
            width="300"
            height="200">
          
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button class="btn">Learn More</button>
    `;


    container.appendChild(card);

});
const message = document.querySelector("#visit-message");


const today = Date.now();

const lastVisit = localStorage.getItem("discoverLastVisit");


if(!lastVisit){

message.textContent =
"Welcome! Let us know if you have any questions.";

}

else{

const difference = today - Number(lastVisit);


const days =
Math.floor(difference / (1000 * 60 * 60 * 24));


if(days < 1){

message.textContent =
"Back so soon! Awesome!";

}

else if(days === 1){

message.textContent =
"You last visited 1 day ago.";

}

else{

message.textContent =
`You last visited ${days} days ago.`;

}

}


localStorage.setItem("discoverLastVisit", today);