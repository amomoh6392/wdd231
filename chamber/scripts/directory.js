const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector("#cards");
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
const url = "members.json";

async function getMembers() {
    const response = await fetch(url);
    const members = await response.json();

    displayMembers(members);
}

getMembers();


function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <div class="card-info-head">
                <h3>${member.name}</h3>
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
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Address:</strong> ${member.address}</p>

                    <p><strong>Phone:</strong> ${member.phone}</p>

                    <p>
                        <strong>URL:</strong>
                        <a href="${member.website}" target="_blank" rel="noopener noreferrer" Visit Website>
                            ${member.website}
                        </a>
                    </p>
                </div>
            </div>

        `;

        cards.appendChild(card);
    });
}
