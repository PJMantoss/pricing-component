const container = document.querySelector(".container"),
    toggle = document.querySelector(".toggleDiv");

toggle.addEventListener("click", () => {
    container.classList.toggle("dark");
});

if(!container.classList.toggle("dark")){}

toggle.addEventListener("click", () => toggle.classList.toggle("active"));