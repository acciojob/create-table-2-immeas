document.getElementById('createTableBtn').addEventListener('click', createTable);

function createTable() {
  // Clear any previous table content
  const table = document.getElementById('myTable');
  table.innerHTML = '';

  // Get user input for rows and columns
  let rows = prompt("Input number of rows");
  let cols = prompt("Input number of columns");

  // Validate user input
  rows = parseInt(rows);
  cols = parseInt(cols);

  // Check if the input is valid
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Create the table dynamically
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();  // Create a new row
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();  // Create a new cell
      cell.textContent = `Row-${i} Column-${j}`;  // Add text to the cell
    }
  }
}
