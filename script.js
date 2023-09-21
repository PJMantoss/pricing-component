const container = document.querySelector(".container.active");
let toggle = document.querySelector(".toggleDiv");

    // let getMode = localStorage.getItem("mode");
    // if(getMode && getMode === "active"){
    //     container.classList.toggle("active");
    //     toggle.classList.add("active");
    // }
    //console.log(getMode);

toggle.addEventListener("click", () => {
    container.classList.toggle(".container.active.invisible");

    // if(!container.classList.contains("annual")){
    //     return localStorage.setItem("mode", "visible");
    // }

    // localStorage.setItem("mode", "visible");
});

toggle.addEventListener("click", () => toggle.classList.toggle("visible"));