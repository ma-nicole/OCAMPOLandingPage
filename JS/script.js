var container = document.getElementById('mainContainer');
var images = [
    'url("https://wallpapers.com/images/hd/coquette-z7g866zr50wqtz0v.jpg")', 
    'url("https://i.pinimg.com/736x/08/99/b8/0899b871a05f7a681a7888093ed4e366.jpg")',
    'url("https://cdn.wallpapersafari.com/7/5/oSQIMy.jpg")',
    'url("https://wallpapercave.com/wp/wp11981257.jpg")'
];
var imageIndex = 0;

function changeBackgroundImage() {
    container.style.backgroundImage = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length; // Cycle through images
}