tateti=Tateti();
gui={
	jugadorA:"",
	jugadorB:"",
	puntajeA:0,
	puntajeB:0,
	empates:0,
	estado:"",
	turno:"X"
}
gui.Actualizar=function (){
	JSON.setHTML(output,"name",gui);
}
gui.ComprobarNombres=function (){
	if (gui.jugadorA==gui.jugadorB)return false;
	if (gui.jugadorA=="")return false;
	if (gui.jugadorB=="")return false;
	return true;
}
gui.Empezar=function (){
	if (!gui.ComprobarNombres()){
		JSON.getForm2(formulario,gui);
	}
	if (!gui.ComprobarNombres()){
		alert("ingrese nombres diferentes");
		return ;
	}
	tateti.iniciar();
	tablero.innerHTML="";
	gui.estado=""
	gui.turno="X";
	for (var j=0;j<3;j++){
		for (var i=0;i<3;i++){
			var elem=document.createElement("button");
			elem.innerText="-";
			elem.i=i;
			elem.j=j;
			elem.onclick=gui.step;
			tablero.appendChild(elem);
		}
		tablero.appendChild(document.createElement("br"));
	}

	gui.Actualizar();
}
gui.ReiniciarPuntaje=function (){
	gui.puntajeA=0;
	gui.puntajeB=0;
	gui.empates=0;
	gui.jugadorA="";
	gui.jugadorB="";
	gui.estado="";
	gui.turno="";
	gui.Actualizar();
	JSON.setForm(formulario,gui);
}
gui.step=function (e){
	var button=e.target;
	var ok=tateti.step(button.j,button.i);
	var termino=tateti.termino();
	
	if (!ok && !termino){
		gui.estado="Esa casilla ya esta ocupada";
	}
	else if ( termino && ok){
	
			
		button.innerText=gui.turno;
		var ganador=tateti.ganador();
		if (ganador==0){
			gui.estado="Empate";
			gui.empates++;
		}
		else if (ganador==1){
			gui.estado="Gano Cruz";
			gui.puntajeA++;
		}
		else if (ganador==-1){
			gui.estado="Gano Circulo";
			gui.puntajeB++;
		}
	}
	else if (ok) {
		button.innerText=gui.turno;
		gui.estado="";
		if (gui.turno=="X"){
			gui.turno="O";
		}
		else {
			gui.turno="X";
		}
	}
	gui.Actualizar();
	
}
