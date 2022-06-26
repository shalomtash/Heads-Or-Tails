const getHeads = document.querySelector('#heads')
const getTails = document.querySelector('#tails')
const reset = document.querySelector('#reset')

let winnner = ''
let chosen = 0
let compChosen = 0
let outcome = 0
let table = document.querySelector('table')
let totalrows = document.querySelectorAll('table tr').length;
let yourScore = 0
let compScore = 0

getHeads.addEventListener('click', () => {
  chosen = 1
  evaluate()
  let row = table.insertRow(totalrows)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  let cell5 = row.insertCell(4)
  cell1.textContent= 'Head'
  cell2.textContent=compChosen ===1?'Head':'Tails'
  cell3.textContent = outcome === 1 ? "Head" : "Tails";
  cell4.textContent=yourScore
  cell5.textContent=compScore
  

  
})
getTails.addEventListener('click', () => {
  chosen = 2
  evaluate()
  let row = table.insertRow(totalrows);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	let cell3 = row.insertCell(2);
	let cell4 = row.insertCell(3);
	let cell5 = row.insertCell(4);
	cell1.textContent = "Tails";
	cell2.textContent = compChosen === 1 ? "Head" : "Tails";
	cell3.textContent = outcome === 1 ? "Head" : "Tails";
	cell4.textContent = yourScore;
	cell5.textContent = compScore;

	
})

const evaluate = () => {
  	compChosen = Math.floor(Math.random() * 2) + 1;
  outcome = Math.floor(Math.random() * 2) + 1;
  if ((table.rows.length === 5)) {
     calculate()
  }
		if (chosen == outcome && compChosen !== outcome) {
      console.log("You emerged the winner");
      yourScore++
		} else if (chosen !== outcome && compChosen === outcome) {
      console.log("Computer has won");
      compScore++
		} else if (chosen === outcome && compChosen === outcome) {
			console.log("You tie");
    }
}

const calculate = () => {
  yourScore > compScore ? alert('You Won the game') : compScore > yourScore ? alert('Computer did win') : alert('You both tied')
  location.reload()
}

const reload = () => {
  reset.addEventListener('click', () => {
    location.reload()
  })
}
reload()
