const container = document.getElementById("container");

function createGrid(row_col){
  container.innerHTML = "";

  const width = container.clientWidth / row_col;
  const height = container.clientHeight / row_col;

  for(i=0;i<row_col*row_col;i++){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.ondragstart = (e) => e.preventDefault();
    container.appendChild(div);
  }

}

createGrid(16);


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

var color = document.getElementById("favcolor");
var backgroundcolor = "#ff0000";
color.oninput = function() {
  backgroundcolor = this.value;
}

function changecolor(event){
  if (event.target.classList.contains("grid-item") && mouseDown) {
    event.target.style.backgroundColor = backgroundcolor;
}
}

container.addEventListener("mouseover",changecolor,true);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value +"*"+slider.value;

slider.oninput = function() {
  output.innerHTML = this.value+"*"+this.value;
  createGrid(this.value);
}

var erase = document.getElementById("erase");


erase.onclick = () => {
  document.querySelectorAll(".grid-item").forEach(div => {
    div.style.backgroundColor = "white";
  })
}

