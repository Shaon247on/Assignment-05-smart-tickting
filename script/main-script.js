const allSelector= document.getElementsByClassName('selector')
let count = 40;
let booked= 0;
// let cost =0;
for(const btn of allSelector){
    btn.addEventListener('click', function(e){
        btn.classList.toggle('bg-[#1DD100]')
        count-=1
        setInnerText('available-seat', count)
        booked+=1
        setInnerText('booked-seat',booked)
        // console.log(count)
        const seatName = e.target.innerText
        const seatType = 'Economy'
        const seatPrice = 50
        const accountContainer = document.getElementById('account-container')
        const tr =document.createElement('tr')
        const td =document.createElement('td')
        td.classList.add('text-start')
        td.innerText = seatName
        const td2 =document.createElement('td')
        td2.innerText= seatType
        const td3 =document.createElement('td')
        td3.classList.add('text-end')
        td3.innerText=seatPrice
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        accountContainer.appendChild(tr)
        // cost+=550
        // setInnerText('total-amount',cost)

        
    })    
}



function setInnerText(id, value){
    const availableSeat = document.getElementById(id)
    availableSeat.innerText=value
}