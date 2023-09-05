const body = document.querySelector("body"),
    toggle = document.querySelector(".toggleDiv");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark")
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));