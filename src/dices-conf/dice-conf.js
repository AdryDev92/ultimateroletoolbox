function dice(longitudDado) {
    let numRandom = Math.floor(Math.random()* longitudDado +1);
    let box = document.getElementById("D" + longitudDado);
    box.value = numRandom;
}