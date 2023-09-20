const container = document.querySelector("#containerDiv"),
    toggle = document.querySelector(".toggleDiv");

    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark"){
        container.classList.toggle("visible");
        toggle.classList.add("active");
    }
    //console.log(getMode);

toggle.addEventListener("click", () => {
    container.classList.toggle("visible");

    if(!container.classList.contains("visible")){
        return localStorage.setItem("mode", "visible");
    }

    localStorage.setItem("mode", "visible");
});

toggle.addEventListener("click", () => toggle.classList.toggle("visible"));