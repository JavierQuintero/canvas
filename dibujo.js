let $img1 = document.getElementById("img1");
let $img2 = document.getElementById("img2");
let $img3 = document.getElementById("img3");
let $img4 = document.getElementById("img4");
let $img5 = document.getElementById("img5");
let $img6 = document.getElementById("img6");
let lienzo1 = $img1.getContext("2d");
let lienzo2 = $img2.getContext("2d");
let lienzo3 = $img3.getContext("2d");
let lienzo4 = $img4.getContext("2d");
let lienzo5 = $img5.getContext("2d");
let lienzo6 = $img6.getContext("2d");
// for(i=1;i<=6;i++){
// 	let $img1 = document.getElementById("img");
// 	console.log(i)
// }

for( i=-1, a=30; i<=30, a>=0; i++,a--){

	dibujarLinea(lienzo1, "red", 300, (i+1)*10, 0, a*10)
	dibujarLinea(lienzo2, "gray", (i+1)*10, 0, a*10, 300)
	dibujarLinea(lienzo3, '#010', (i+1)*10, 0, 300, (i+1)*10)
	dibujarLinea(lienzo4, '#4ad', (i+1)*10, 300, 0, (i+1)*10)
	dibujarLinea(lienzo5, '#c2e', 300, (i+1)*10, a*10 ,300)
	dibujarLinea(lienzo6, '#0d1', 0, a*10, (i+1)*10, 0)
}
//Dibujando Texto

lienzo1.font = '2.3em cursive';
lienzo1.fillStyle = 'rgba(0,0,0,0.6)';
lienzo1.fillText("devJaviQ", 80, 290)

//funcion Dibujo en canvas

function dibujarLinea(e,color, x_init, y_init, x_end, y_end){

	e.beginPath();
	e.strokeStyle = color;
	e.moveTo(x_init, y_init);
	e.lineTo(x_end, y_end);
	e.stroke();
	e.closePath();

}
