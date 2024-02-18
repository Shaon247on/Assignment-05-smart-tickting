const allSelector = document.getElementsByClassName('selector')
let count = 40;
let booked = 0;
for (const btn of allSelector) {
    btn.addEventListener('click', function (e) {
        btn.classList.toggle('bg-[#1DD100]')
        count -= 1
        setInnerText('available-seat', count)
        booked += 1
        setInnerText('booked-seat', booked)
        const seatName = e.target.innerText
        const seatType = 'Economy'
        const seatPrice = 550
        const accountContainer = document.getElementById('account-container')
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.classList.add('text-start')
        td.innerText = seatName
        const td2 = document.createElement('td')
        td2.innerText = seatType
        const td3 = document.createElement('td')
        td3.classList.add('text-end')
        td3.innerText = 550
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        accountContainer.appendChild(tr)
        totalCost('total-amount', seatPrice)

        totalCost('grand-total', seatPrice)
    })
}

function totalCost(id, value) {
    const totalAmount = document.getElementById(id).innerText;
    const convertedTotalAmount = parseInt(totalAmount)
    const sum = convertedTotalAmount + value
    setInnerText(id, sum)
}

function setInnerText(id, value) {
    const availableSeat = document.getElementById(id)
    availableSeat.innerText = value
}
const input = document.getElementById('coupon-input')
const coupneButton = document.getElementById('coupon-button')
input.addEventListener('input',function(){
    if (input.value === 'NEW15'|| input.value === 'Couple 20') {
        coupneButton.removeAttribute('disabled')
        coupneButton.addEventListener('click', function () {
                coupneButton.classList.add('hidden')
                input.classList.add('hidden')
    })}
    else{
        coupneButton.setAttribute('disabled', 'true')
    }
    
})