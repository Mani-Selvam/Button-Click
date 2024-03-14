let bntEl = document.querySelector("#btn");

let count = 0;

let viewSheetEl = document.querySelector("#viewSheet");

let colEl = document.querySelector(".col");

let img3El = document.querySelector(".divshow");

bntEl.addEventListener("click", (event) => {
    event.preventDefault();
    count++;
    viewSheetEl.innerText = count;

    if (count >= 10) {
        colEl.hidden = !colEl.hidden;
    } else {
        colEl.hidden;
    }

    if (count >= 10) {
        img3El.hidden = !img3El.hidden;
    } else {
        img3El.hidden;
    }
});
