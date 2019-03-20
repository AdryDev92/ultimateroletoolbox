let count = 0;
var countEl = document.getElementById('count');

function plus() {
 count++;
 countEl.value = count;
}

function minus() {
 count -- ;
 countEl.value = count;
}