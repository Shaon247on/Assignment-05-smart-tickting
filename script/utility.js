function handlingClick(buttonID) {
    const colorChangeButton = document.getElementById(buttonID);
    colorChangeButton.addEventListener('click', function () {
        colorChangeButton.classList.toggle('bg-blue-500');
        colorChangeButton.classList.toggle('bg-green-500');
        generateToDynamicAccount(buttonID)

    });
}


function generateToDynamicAccount(elementId) {
    const accountContainer= document.getElementById('account-containter')
    const row = document.createElement('tr');
    // row.id = `item-${item.id}`;    
    const elementInnerName= elementId
    row.innerHTML = `
      <td class="text-start">${elementInnerName}</td>
      <td>Economy</td>
      <td class="text-end">550$</td>
    `;
    accountContainer.appendChild(row);

}

handlingClick('A1')
handlingClick("A2")
handlingClick('A3')
handlingClick('A4')
handlingClick('B1')
handlingClick('B2')
handlingClick('B3')
handlingClick('B4')
handlingClick('C1')
handlingClick('C2')
handlingClick('C3')
handlingClick('C4')
handlingClick('D1')
handlingClick('D2')
handlingClick('D3')
handlingClick('D4')
handlingClick('E1')
handlingClick('E2')
handlingClick('E3')
handlingClick('E4')
handlingClick('F1')
handlingClick('F2')
handlingClick('F3')
handlingClick('F4')
handlingClick('G1')
handlingClick('G2')
handlingClick('G3')
handlingClick('H')
handlingClick('H1')
handlingClick('H2')
handlingClick('H3')
handlingClick('H4')
handlingClick('I1')
handlingClick('I2')
handlingClick('I3')
handlingClick('I4')
handlingClick('J1')
handlingClick('J2')
handlingClick('J3')
handlingClick('J4')