let color = ["#ed6a5a", "#f4f1bb", "#9bc1bc", "e6ebe0","#36c9c6"];


let button = document.getElementById('button_color');
button.addEventListener('click', changeColor);

function changeColor(e) {
    let randomI = Math.floor(Math.random() * color.length);
    let randomColor = color[randomI];
    document.getElementById("square").style.backgroundColor = randomColor;

}