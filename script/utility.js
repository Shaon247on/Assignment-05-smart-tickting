//Total cost calculation function
function totalCost(id, value) {
    const totalAmount = document.getElementById(id).innerText;
    const convertedTotalAmount = parseInt(totalAmount)
    const sum = convertedTotalAmount + value
    setInnerText(id, sum)
}

//Set dynamic value function
function setInnerText(id, value) {
    const availableSeat = document.getElementById(id)
    availableSeat.innerText = value
}
