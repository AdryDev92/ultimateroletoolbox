let countEl = document.getElementById("count");
let countEl10 = document.getElementById("count10");
let countEl50 = document.getElementById("count50");
let countEl100 = document.getElementById("count100");

// control variables
let count = 0;
let count10 = 0;
let count50 = 0;
let count100 = 0;
// control variables

 function plus(){
  count++;
  countEl.value = count;
}

function minus(){
  count--;
  countEl.value = count;
}

function plus10(){
  count10+=10;
  countEl10.value = count10;
}

function minus10(){
  count10-=10;
countEl10.value = count10;
}

function plus50(){
  count50+=50;
  countEl50.value = count50;
}


function minus50(){
  count50-=50;
countEl50.value = count50;
}

function plus100(){
  count100+=100;
  countEl100.value = count100;
}

function minus100(){
  count100-=100;
countEl100.value = count100;
}
