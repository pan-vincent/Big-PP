let width = 0;
let height = 0;
let game = [];

function gameCreate() {
  width = 0 + gameCreate_width.value;
  height = 0 + gameCreate_height.value;
  if (width < 1 || height < 1) {
    gameCreate_title.style.color = "red";
    gameCreate_title.textContent = "Width or height < 0";
  }
  game = Array.from({ length: width }, (v1, i) =>
    Array.from({ length: height }, (v2, j) => j),
  );
  gameUpdate();
}

function gameUpdate() {
  game_container.text = "";
  game_container.innerHTML = "";

  const table = document.createElement("table");
  table.border = "dotted 1px black";
  const size = cell_size*cell_size_modifier+'px';
  for (let y = 0; y < height; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < width; x++) {
      const cell = document.createElement("td");
      cell.style.width = size;
      cell.style.height = size;
      cell.className = 'cell';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  game_container.appendChild(table);
}
