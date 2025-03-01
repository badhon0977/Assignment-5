function getRandomColor() {
    let red = Math.floor(Math.random() * 156) + 100;
    let green = Math.floor(Math.random() * 156) + 100;
    let blue = Math.floor(Math.random() * 156) + 100;
    
    return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById("theme-btn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
    document.querySelector('.navbar').style.backgroundColor = 'FFFFFF';
});