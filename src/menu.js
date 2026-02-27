const DOM_panel = document.getElementById('panel-menu');
const cell_size = 50;
let cell_size_modifier = 1;
function menuPressed(task){
  Array.from(DOM_panel.children).forEach(child => {
    child.style.color = 'black';
  });
  document.getElementById('menu-button-'+task).style.color = 'green';
}

function gameNew(){
  game_container.text = "";
  game_container.innerHTML = `
    <div id="game-create-container">
    <h1 id="gameCreate_title">Grid Size</h1>
    <input id="gameCreate_width" placeholder="width..." type="number"><br/>
    <input id="gameCreate_height" placeholder="height..." type="number"><br/>
    <button onclick="gameCreate()">Create</button>
    </div>
    `
}

function menu(task){
  menuPressed(task);
  if(task=='new'){
    gameNew();
    return;
  }
  if (task=='open'){
    gameOpen();
    return;
  }
  if(task=='copy'){
    gameCopy();
    return;
  }
}

function zoom(type){
  
  if(type == '0'){
    cell_size_modifier=1;
  }else if(type == '-'){
    cell_size_modifier-=0.1;
  }else if(type == '+'){
    cell_size_modifier+=0.1;
  }
  const size = cell_size*cell_size_modifier+'px';
  document.querySelectorAll('.cell').forEach(cell =>{
    cell.style.width = size;
    cell.style.height = size;
  })
}