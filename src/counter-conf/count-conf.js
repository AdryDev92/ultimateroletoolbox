let countEl = document.getElementById("count");
let countEl10 = document.getElementById("count10");
let countEl50 = document.getElementById("count50");
let countEl100 = document.getElementById("count100");


 function plus(){
  countEl++;
  countEl.value = countEl;
}

function minus(){
  countEl--;
  countEl.value = countEl;
}

function plus10(){
  countEl10+=10;
  countEl.value = countEl10;
}

function minus10(){
  countEl10-=10;
countEl10.value = countEl10;
}

function plus50(){
  countEl50+=50;
  countEl50.value = countEl50;
}


function minus50(){
  countEl50-=50;
countEl50.value = countEl50;
}

function plus100(){
  countEl100+=100;
  countEl100.value = countEl100;
}

function minus100(){
  countEl100-=100;
countEl100.value = countEl100;
}
