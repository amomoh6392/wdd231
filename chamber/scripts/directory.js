const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector("#cards");

cards.classList.add("grid-view");
gridbutton.classList.add("active");


gridbutton.addEventListener("click", () => {
    cards.classList.add("grid-view");
    cards.classList.remove("list-view")

    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});
listbutton.addEventListener("click", () => { 
    cards.classList.add("list-view");
    cards.classList.remove("grid-view");

    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
});
const membersUrl = "data/members.json";

async function getMembers() {
    const response = await fetch(membersUrl);
    const members = await response.json();

    displayMembers(members);
}

getMembers();


function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <div class="card-info-head">
                <h2>${member.name}</h2>
                <div class="tagline">
                    <p><em>${member.description}</em></p>
                </div>
            </div>
            <div class="card-info">

                <img src="images/${member.image}"
                    alt="${member.name}"
                    loading="lazy"
                    width="300"
                    height="200">
                <div class="details">
                    <p><strong>Email:</strong><span>${member.email}</span></p>
                    <p><strong>Address:</strong><span> ${member.address} </span></p>

                    <p><strong>Phone:</strong><span>${member.phone}</span></p>

                    <p><strong>Membership Level:</strong> <span> ${member.membership} </span></p>

                    <p><strong>Field:</strong> <span> ${member.category} </span></p>
                    <p>
                        <strong>URL:</strong><span> Visit Website
                        <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                             ${member.website} </span>
                        </a>
                    </p>
                </div>
            </div>

        `;

        cards.appendChild(card);
    });
}
