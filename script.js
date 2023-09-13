const container = document.querySelector("#containerDivAnnual"),
    toggle = document.querySelector(".toggleDiv");

    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark"){
        container.classList.toggle("visible");
        toggle.classList.add("active");
    }
    //console.log(getMode);

toggle.addEventListener("click", () => {
    container.classList.toggle("dark");

    if(!container.classList.contains("dark")){
        return localStorage.setItem("mode", "light");
    }

    localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));