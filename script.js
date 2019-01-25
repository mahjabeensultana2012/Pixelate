const table = document.getElementsByTagName('table')[0];

function makeRow() {
  const tr = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const addRow = document.getElementById('add-row');
addRow.addEventListener('click', makeRow);

table.addEventListener('click', colorize);

let chosenColor = 'red';
const select = document.getElementsByTagName('select')[0];
select.addEventListener('change', function(event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  if (event.target.className.length) {
    event.target.className = '';
  } else {
    event.target.className = chosenColor;
  }
}
