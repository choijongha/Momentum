const Images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];
const randomImage = Images[Math.floor(Math.random() * Images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);
console.log(bgImage)