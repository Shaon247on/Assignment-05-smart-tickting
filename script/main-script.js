// Selection of seat script
const allSelector = document.getElementsByClassName('selector')
let count = 40;
let booked = 0;

for (const btn of allSelector) {
    
    btn.addEventListener('click', function (e) {
        const availableSeat = document.getElementById('available-seat').innerText
        let convertedAvailableSeat = parseInt(availableSeat)        
        if (convertedAvailableSeat < 37) {
            alert("You have selected maximum number of seats")
        }
        else {       
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
        }



    })
}


// coupon applying script

const input = document.getElementById('coupon-input')
const coupneButton = document.getElementById('coupon-button')
const discountedAmount = document.getElementById('discounted-amount')
input.addEventListener('input', function () {
    if (input.value === 'NEW15') {
        coupneButton.removeAttribute('disabled')
        coupneButton.addEventListener('click', function () {
            const grandTotal = document.getElementById('grand-total').innerText
            const convertedGrandTotal = parseInt(grandTotal)
            const dicountedPrice = convertedGrandTotal * 15 / 100
            const sum = convertedGrandTotal - dicountedPrice
            document.getElementById('grand-total').innerText = sum
            coupneButton.classList.add('hidden')
            input.classList.add('hidden')
            discountedAmount.classList.remove('hidden')
            document.getElementById('discounted-cost').innerText = -dicountedPrice

        })
    }
    else if (input.value === 'Couple 20') {
        coupneButton.removeAttribute('disabled')
        coupneButton.addEventListener('click', function () {
            const grandTotal = document.getElementById('grand-total').innerText
            const convertedGrandTotal = parseInt(grandTotal)
            const dicountedPrice = convertedGrandTotal * 20 / 100
            const sum = convertedGrandTotal - dicountedPrice
            console.log(sum)
            document.getElementById('grand-total').innerText = sum
            coupneButton.classList.add('hidden')
            input.classList.add('hidden')
            discountedAmount.classList.remove('hidden')
            document.getElementById('discounted-cost').innerText = -dicountedPrice
        })
    }
    else {
        coupneButton.setAttribute('disabled', 'true')
    }
})

// "Submit" button enable script

const phoneNumberInputField = document.getElementById('Phone-number')
const submitButton = document.getElementById('submit-button')
phoneNumberInputField.addEventListener('input', function () {
    if (phoneNumberInputField.value !== '') {
        submitButton.removeAttribute('disabled')

    }
    else {
        submitButton.setAttribute('disabled', 'true')
    }
})


// "Buy Now" button scroll script

function scrollToBookingSection() {
    window.scrollTo({
        top: document.getElementById('paribahan-section').offsetTop,
        behavior: 'smooth'
    });
}

//"Submit" button linked script

function hideSectionButton() {
    const successSection = document.getElementById('success-section')
    successSection.classList.remove('hidden')
    const header = document.getElementById('header-section')
    header.classList.add('hidden')
    const main = document.getElementById('main-section')
    main.classList.add('hidden')
    const footer = document.getElementById('footer-section')
    footer.classList.add('hidden')

}

//"Continue" button linked script

function showSectionButton() {
    const header = document.getElementById('header-section')
    header.classList.remove('hidden')
    const main = document.getElementById('main-section')
    main.classList.remove('hidden')
    const footer = document.getElementById('footer-section')
    footer.classList.remove('hidden')
    const successSection = document.getElementById('success-section-section')
    successSection.classList.add('hidden')    
}