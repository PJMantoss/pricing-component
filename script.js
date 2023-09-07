const container = document.querySelector(".container"),
    toggle = document.querySelector(".toggleDiv");

toggle.addEventListener("click", () => {
    container.classList.toggle("dark");

    if(!container.classList.contains("dark")){
        return localStorage.setItem();
    }
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));