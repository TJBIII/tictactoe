function initializeDOM (currentItem) {
  var currentEl = document.getElementById('output');
  currentEl.innerHTML += `<div class='tile' id='${currentItem}'></div>`;
  currentEl.addEventListener('click', tileSelected);

}


function gameInit(){
  var ids = ['topLeft', 'topMid', 'topRight', 'midLeft', 'midMid', 'midRight', 'bottomLeft', 'bottomMid', 'bottomRight'];

  ids.forEach(initializeDOM);

}


function tileSelected() {

  console.log("clicked", event.target.id);
}




gameInit();