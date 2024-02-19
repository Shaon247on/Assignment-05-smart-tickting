function totalCost(id, value) {
    const totalAmount = document.getElementById(id).innerText;
    const convertedTotalAmount = parseInt(totalAmount)
    const sum = convertedTotalAmount + value
    setInnerText(id, sum)
}