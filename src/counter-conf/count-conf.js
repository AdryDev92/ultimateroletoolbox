let count = 0;
var countEl = document.getElementById('count');

function plus(counter) {
 count++;
 countEl.value = count;
}

function minus(counter) {
 count -- ;
 countEl.value = count;
}