document.getElementById("count-el").innerText = 5
let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
    count += 1;
    countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");
function save() {
    let oldRec = count +" - ";
    saveEl.textContent += oldRec;
    count = 0;
    countEl.innerText = count;
}
console.log("Quokka is workingjkldfhljsgdf,sdhflkjahljkdfajflkadfhlk")