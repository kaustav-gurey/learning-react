const inputEl = document.getElementById("value")
const lengthEl = document.getElementById("length")
const volumeEL = document.getElementById("volume")
const massEl = document.getElementById("mass")
const btn = document.getElementById("convert")

inputEl.addEventListener("input", function(){
    let numOfChar = inputEl.value.length;
    if(numOfChar > 2){
        let length = numOfChar + "ch"
        inputEl.style.width = length
    }
})
btn.addEventListener("click", function(){
    let val = inputEl.value
    const check = /^[0-9.-]+$/
    if(!check.test(val)){
        lengthEl.innerText = "The value entered is invalid please enter a valid value!"
        volumeEL.innerText = "The value entered is invalid please enter a valid value!"
        massEl.innerText = "The value entered is invalid please enter a valid value!"
        inputEl.value = ""
        inputEl.style.width = "11vh"
        return 

    }
    let value = parseFloat(val)
    let feet = (3.280 * value).toFixed(3)
    let meters =  (0.304 * value).toFixed(3)

    let gallons = (0.264 * value).toFixed(3)
    let liters = (3.785 * value).toFixed(3)

    let pounds = (2.204 * value).toFixed(3)
    let kilos = (0.453 * value).toFixed(3)

    lengthEl.innerText = `${val} meters = ${feet} feet | ${val} feet = ${meters} meters`
    volumeEL.innerText = `${val} liters = ${gallons} gallons | ${val} gallons = ${liters} liters`
    massEl.innerText = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilos} kilos`

})