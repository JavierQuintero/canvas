let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");

// dibujarLineas('#4ad', 20, 300, 0, 20)
// dibujarLineas('#4ad', 30, 300, 0, 30)
// dibujarLineas('#4ad', 40, 300, 0, 40)
// dibujarLineas('#4ad', 50, 300, 0, 50)
// dibujarLineas('#4ad', 60, 300, 0, 60)
// dibujarLineas('#4ad', 70, 300, 0, 70)
// dibujarLineas('#4ad', 80, 300, 0, 80)

for( i=0, a=30; i<=30, a>=0; i++,a-- ){
	dibujarLineas('#4ad', (i+1)*10, 300, 0, (i+1)*10)
	debugger
	dibujarLineas('#c2e', 300, (i+1)*10, a*10 ,300)
	dibujarLineas('#0d1', 0, a*10, (i+1)*10, 0)
	dibujarLineas('#010', (i+1)*10, 0, 300, (i+1)*10)
}
//Dibujando Texto
lienzo.font = '20px arial';
lienzo.fillStyle = 'cyan';
lienzo.fillText("devJaviQ", 100, 150)

//funcion Dibujo en canvas

function dibujarLineas(color, x_init, y_init, x_end, y_end){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_init, y_init);
	lienzo.lineTo(x_end, y_end);
	lienzo.stroke();
	lienzo.closePath();

}
