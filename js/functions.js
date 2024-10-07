const list = document.querySelector('#numbers')
const rowCountSpan = document.querySelector('p span')
let rowCount = 0


document.querySelector('button').addEventListener('click', () => {
let numbers = []
let rowIndex = 0;
while (rowIndex < 7) {
  const randomNumber = Math.floor(Math.random() * 10 )
    numbers.push(randomNumber)
    rowIndex++
}

const row = list.insertRow()
for (let i = 0; i < numbers.length; i++) {
  const col = row.insertCell(i)
  col.innerHTML = numbers[i]
}

  rowCount++
  rowCountSpan.textContent = rowCount
})