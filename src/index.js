let width = 50;
let height = 50;

function gameMenuNew(){
  game_container.text = "";
  game_container.innerHTML = "";
  
  const container = document.createElement("div");
  container.id = "game-create-container";
  container.innerHTML = 
    `
    <h1>Grid Size</h1>
    <input id="grid_width" placeholder="width..." type="number"><br/>
    <input id="grid_height" placeholder="height..." type="number"><br/>
    <button onclick="gameCreate()">Create</button>
    `
  game_container.appendChild(container);
}