const container = document.querySelector("#containerDiv");
let toggle = document.querySelector(".toggleDiv");

    // let getMode = localStorage.getItem("mode");
    // if(getMode && getMode === "annual"){
    //     container.classList.toggle("annual");
    //     toggle.classList.add("active");
    // }
    //console.log(getMode);

toggle.addEventListener("click", () => {
    container.classList.toggle("annual");

    // if(!container.classList.contains("annual")){
    //     return localStorage.setItem("mode", "visible");
    // }

    // localStorage.setItem("mode", "visible");
});

toggle.addEventListener("click", () => toggle.classList.toggle("visible"));