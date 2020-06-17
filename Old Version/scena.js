var canvas = document.querySelector('canvas');

canvas.width = window.scrollWidth;
canvas.height = window.scrollHeight;

var ctx = canvas.getContext('2d');

// ctx.fillRect(100, 100, 100, 100)

var image = new Image();
image.src = 'file.png';

ctx.drawImage(image, 20, 20, 300, 160);

console.log(canvas);

// 

// Deklarowanie dziala i obrazu dla js
//const img = document.getElementById('dzialo')
//const bttn = document.getElementById('btn')

//function rotateImg() {  // Funkcja, która rotuje dzialo
  //var angle_value = document.getElementById("ang").value; // Pobieranie wartości kąta z inputu
  //angle_value = (angle_value * -1) // Przeliczanie inputu na rzeczywisty kąt obrazu
  //img.style.transform = `rotate(${angle_value}deg)` // Przekręcanie obrazu o zadany kąt
//}