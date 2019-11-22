let countEl = document.getElementById("count");
let countEl10 = document.getElementById("count10");
let countEl50 = document.getElementById("count50");
let countEl100 = document.getElementById("count100");
let count = 0;


 function plus(){
  count++;
  countEl.value = count;
}

function minus(){
  count--;
  countEl.value = count;
}

function plus10(){
  count+=10;
  countEl.value = count;
}

function minus10(){
  count-=10;
countEl10.value = count;
}

function plus50(){
  count+=50;
  countEl50.value = count;
}


function minus50(){
  count-=50;
countEl50.value = count;
}

function plus100(){
  count+=100;
  countEl100.value = count;
}

function minus100(){
  count-=100;
countEl100.value = count;
}
