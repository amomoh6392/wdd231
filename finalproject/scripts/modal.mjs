const modal = document.querySelector("#projectModal");

const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTechnology = document.querySelector("#modalTechnology");
const modalCategory = document.querySelector("#modalCategory");
const modalStatus = document.querySelector("#modalStatus");
const modalLink = document.querySelector("#modalLink");

const closeModal = document.querySelector("#closeModal");

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

    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});