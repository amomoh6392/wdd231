const timestamp = document.querySelector("#timestamp");
 
timestamp.value = new Date().toISOString();

const npModal = document.querySelector("#npModal");
const npButton = document.querySelector("#npButton");
npButton.addEventListener("click", (event) => {
    event.preventDefault();
    npModal.showModal();
});

document.querySelector("#closeNp").addEventListener("click", () => {
    npModal.close();
});

const bronzeModal = document.querySelector("#bronzeModal");
const bronzeButton = document.querySelector("#bronzeButton");
bronzeButton.addEventListener("click", (event) => {
    event.preventDefault();
    bronzeModal.showModal();
});

document.querySelector("#closeBronze").addEventListener("click", () => {
    bronzeModal.close();
});

const silverModal = document.querySelector("#silverModal");
const silverButton = document.querySelector("#silverButton");
silverButton.addEventListener("click", (event) => {
    event.preventDefault();
    silverModal.showModal();
});

document.querySelector("#closeSilver").addEventListener("click", () => {
    silverModal.close();
});


const goldModal = document.querySelector("#goldModal");
const goldButton = document.querySelector("#goldButton");
goldButton.addEventListener("click", (event) => {
    event.preventDefault();
    goldModal.showModal();
});

document.querySelector("#closeGold").addEventListener("click", () => {
    goldModal.close();
});
    