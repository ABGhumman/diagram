// This JavaScript will change the background color of the content box when the button is clicked

document.getElementById('changeColorButton').addEventListener('click', function() {
    const contentBox = document.getElementById('contentBox');
    const randomColor = getRandomColor();
    contentBox.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
