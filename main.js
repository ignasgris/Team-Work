let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener("click", function () {
    let darzoves = document.querySelector(".darzove");
    darzoves.classList.remove("d-flex");
    darzoves.classList.add("d-none");
    let vaisiai = document.querySelector(".vaisius");
    vaisiai.classList.remove("d-none");
    vaisiai.classList.add("d-flex");
})

btn2.addEventListener("click", function () {
    let vaisiai = document.querySelector(".vaisius");
    vaisiai.classList.remove("d-flex");
    vaisiai.classList.add("d-none");
    let darzoves = document.querySelector(".darzove");
    darzoves.classList.remove("d-none");
    darzoves.classList.add("d-flex");
})

btn3.addEventListener("click", function () {
    let vaisiai = document.querySelector(".vaisius");
    vaisiai.classList.remove("d-none");
    vaisiai.classList.add("d-flex");
    let darzoves = document.querySelector(".darzove");
    darzoves.classList.remove("d-none");
    darzoves.classList.add("d-flex");
})