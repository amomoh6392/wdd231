
const spotlight = document.querySelector("#spotlight");
const spotlightsUrl = "data/members.json";

async function getSpotlights() {
    const response = await fetch(spotlightsUrl);
    if (!response.ok) {
        throw new Error("Could not load members.json");
    }

    const members = await response.json();

    const featured = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    featured.sort(() => Math.random() - 0.5);

    const selected = featured.slice(0, 3);

    selected.forEach(member => {
        spotlight.innerHTML += `
            <section class="spotlight-card">
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
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p>
                            <strong>URL:</strong>
                            <a href="${member.website}" target="_blank" rel="noopener noreferrer"> Visit Website
                                ${member.website}
                            </a>
                        </p>
                        <p><strong>Membership Level:</strong> ${member.membership}</p>
                    </div>
                </div>
            </section>
        `;
    });
}

getSpotlights();