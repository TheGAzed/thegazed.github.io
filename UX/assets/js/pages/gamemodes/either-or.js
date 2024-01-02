const eorfirst = document.getElementById("FIRSTSPAN")
const eorsecond = document.getElementById("SECONDSPAN")

console.log(eorfirst)
console.log(eorsecond)

eorfirst.addEventListener("mouseover", () => {
    eorsecond.style.color = "#963636"
});

eorsecond.addEventListener("mouseover", () => {
    eorfirst.style.color = "#3e3794"
});
