let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");

// dibujarLineas('#4ad', 20, 300, 0, 20)
// dibujarLineas('#4ad', 30, 300, 0, 30)
// dibujarLineas('#4ad', 40, 300, 0, 40)
// dibujarLineas('#4ad', 50, 300, 0, 50)
// dibujarLineas('#4ad', 60, 300, 0, 60)
// dibujarLineas('#4ad', 70, 300, 0, 70)
// dibujarLineas('#4ad', 80, 300, 0, 80)

for(i=0;i<30;i++){	
	dibujarLineas('#4ad', (i+1)*10, 300, 0, (i+1)*10)
}

// Dibujo en canvas

function dibujarLineas(color, x_init, y_init, x_end, y_end){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_init, y_init);
	lienzo.lineTo(x_end, y_end);
	lienzo.stroke();
	lienzo.closePath();

}
