const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const btn = document.getElementById("btn");
const grid = document.getElementById("grid");


btn.addEventListener("click", napravi); 

napravi(); 

function napravi() { 
  let rows = parseInt(rowsInput.value, 10); 
  let cols = parseInt(colsInput.value, 10); 


  if (isNaN(rows) || rows < 1) rows = 1; 
  if (isNaN(cols) || cols < 1) cols = 1; 
  if (rows > 50) rows = 50; 
  if (cols > 50) cols = 50;

  rowsInput.value = rows; 
  colsInput.value = cols;

  const tablica = napraviPraznuTablicu(rows, cols);
  ispuniSpiralno(tablica); 
  iscrtajTablicu(tablica); 
}

function napraviPraznuTablicu(rows, cols) {
  const glavniNiz = []; 
  for (let r = 0; r < rows; r++) { 
    let red = []; 
    for (let c = 0; c < cols; c++) { 
      red.push(0); 
    }
    glavniNiz.push(red); 
  }
  return glavniNiz; 
}

function ispuniSpiralno(glavniNiz) { 

  const rows = glavniNiz.length;
  const cols = glavniNiz[0].length;

  let top = 0;
  let bottom = rows - 1; 
  let left = 0; 
  let right = cols - 1; 

  let broj = 1; 
  const max = rows * cols; 

  while (broj <= max) { 

    for (let i = right; i >= left && broj <= max; i--) { 
      glavniNiz[bottom][i] = broj; 
      broj++; 
    }
    bottom--; 

    for (let j = bottom; j >= top && broj <= max; j--) { 
      glavniNiz[j][left] = broj; 
      broj++;
    }
    left++; 

    for (let k = left; k <= right && broj <= max; k++) { 
      glavniNiz[top][k] = broj; 
      broj++;
    }
    top++; 

    for (let l = top; l <= bottom && broj <= max; l++) {
      glavniNiz[l][right] = broj;
      broj++;
    }
    right--; 
  }
}

function iscrtajTablicu(glavniNiz) { 
  const rows = glavniNiz.length; 
  const cols = glavniNiz[0].length; 

  grid.innerHTML = ""; 

  grid.style.gridTemplateColumns = "repeat(" + cols + ", 115px)";

  for (let r = 0; r < rows; r++) { 
    for (let c = 0; c < cols; c++) { 
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = glavniNiz[r][c];
      grid.appendChild(cell);
    }
  }
}