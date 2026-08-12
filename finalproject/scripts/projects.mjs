const container = document.querySelector("#projects-container");

const modal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTechnology = document.querySelector("#modalTechnology");
const modalCategory = document.querySelector("#modalCategory");
const modalStatus = document.querySelector("#modalStatus");
const modalLink = document.querySelector("#modalLink");

const closeModal = document.querySelector("#closeModal");

let allProjects = [];

const allBtn = document.querySelector("#all");
const webBtn = document.querySelector("#web");
const softwareBtn = document.querySelector("#software");
const educationBtn = document.querySelector("#education");

closeModal.addEventListener("click", () => {
    modal.close();
});

async function getProjects() {
    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Project data could not be loaded.");
        }

        const projects = await response.json();

        allProjects = projects;

        const savedCategory =
            localStorage.getItem("projectCategory") || "All";

        filterProjects(savedCategory);

    } catch (error) {
        console.error(error);
        container.innerHTML =
            `<p>Unable to load project information.</p>`;
    }
}

function displayProjects(projects) {

    projects.forEach(project => {

        const card = document.createElement("article");

        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p><strong>Technology:</strong> ${project.technology}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <p><strong>Year:</strong> ${project.year}</p>
            <p><strong>Status:</strong> ${project.status}</p>

            <button class="details-btn">
                View Details
            </button>
        `;

        const button = card.querySelector(".details-btn");

        button.addEventListener("click", () => {

            modalTitle.textContent = project.title;

            modalDescription.textContent =
                project.description;

            modalTechnology.textContent =
                `Technology: ${project.technology}`;

            modalCategory.textContent =
                `Category: ${project.category}`;

            modalStatus.textContent =
                `Status: ${project.status}`;

            modalLink.href = project.link;
            modalLink.textContent = "Visit Project";

            modal.showModal();
        });

        container.appendChild(card);
    });
}
function filterProjects(category) {
    container.innerHTML = "";

    if (category === "All") {
        displayProjects(allProjects);
        return;
    }

    const filteredProjects = allProjects.filter(
        project => project.category === category
    );

    displayProjects(filteredProjects);
}
getProjects();


allBtn.addEventListener("click", () => {
    localStorage.setItem("projectCategory", "All");
    filterProjects("All");
});

webBtn.addEventListener("click", () => {
    localStorage.setItem(
        "projectCategory",
        "Web Development"
    );

    filterProjects("Web Development");
});

softwareBtn.addEventListener("click", () => {
    localStorage.setItem(
        "projectCategory",
        "Software Development"
    );

    filterProjects("Software Development");
});

educationBtn.addEventListener("click", () => {
    localStorage.setItem(
        "projectCategory",
        "Education"
    );

    filterProjects("Education");
});