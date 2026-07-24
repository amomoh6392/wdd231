const cards = document.querySelector("#cards");
const url = "data/members.json";
async function getmembers() {
    const response = await fetch(url);
    const member = await response.json();

    displayMembers(members);
}

getmembers();
function displayMembers(members) {
    co
    const randomIndex = Math.floor(Math.random() * cards, length);
    members.forEach(member => {
        const card = document.querySelector("section");

        card.innerHTML = `
            <div class= card-info-head>
                <h3>${member.name}</h3>
                div class="tagline">
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

                    <p><strong>Membership Level:</strong> ${member.membership}</p>
                    <p>
                        <strong>URL:</strong>
                        <a href="${member.website}" target="_blank" rel="noopener noreferrer"> Visit Website
                            ${member.website}
                        </a>
                    </p>
                </div>
            </div>
        `;

    });
}