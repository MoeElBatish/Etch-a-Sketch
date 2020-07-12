document.querySelector("button").addEventListener('click',clear);
function addCells(dimensions) {
    border = document.querySelector(".border");
    if (dimensions > 100) {
        dimensions = 100;
    }
    for (let i = 0; i < dimensions; i++) {
        let temp = document.createElement("div")
        temp.classList.add("row");
        for (let j = 0; j < dimensions; j++) {
            let temp2 = document.createElement("div")
            temp2.classList.add("cell")
            temp.appendChild(temp2)
        }
        border.appendChild(temp)
    }
    cells = document.querySelectorAll(".cell");
    cells.forEach((element) => {
        changeBlack(element)}); 
    }
function clear() {
    dimen = Math.floor(Number(prompt("Dimensions?")))
    cells = document.querySelectorAll(".cell"); 
    rows = document.querySelectorAll(".row");
    cells.forEach((item) => {
        item.remove();
    })
    rows.forEach((item) => {
        item.remove();
    })
    addCells(dimen);
    //document.querySelectorAll(".cell").forEach(addEventListener())
}
function changeBlack(item) {
    item.addEventListener("mouseover",() => {
        item.style.backgroundColor = "black";
    })

}
addCells(16);
cells = document.querySelectorAll(".cell");
rows = document.querySelectorAll(".row");