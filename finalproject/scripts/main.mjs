const visitCount =
    document.querySelector("#visitCount");

let visits =
    Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

visitCount.textContent = visits;