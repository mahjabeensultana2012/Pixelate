const table = document.getElementsByTagName('table')[0];
const addRow = document.getElementById('add-row');
const select = document.getElementsByTagName('select')[0];

function makeRow() {
  const tr = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

addRow.addEventListener('click', makeRow);

table.addEventListener('click', colorize);

let chosenColor = 'red';
select.addEventListener('change', function(event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  if (event.target.tagName === 'TD') {
    if (event.target.className === chosenColor) {
      event.target.className = '';
    } else {
      event.target.className = chosenColor;
    }
  }
}

table.addEventListener('mousedown', () => {
  table.addEventListener('mouseover', colorize);
});

table.addEventListener('mouseup', () => {
  table.removeEventListener('mouseover', colorize);
});
