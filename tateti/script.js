var tateti={turno:0,jugadores:null,tablero:null,puntajeX:0,puntajeO:0};
tateti.reiniciarPuntaje=function (){
	tateti.puntajeO=0;
	tateti.puntajeX=0;
	tateti.MostrarPuntaje();
}
tateti.MostrarPuntaje=function (){
	puntajeO.innerText=tateti.puntajeO;
	puntajeX.innerText=tateti.puntajeX;
}

tateti.iniciarTablero=function(tablero){
	tateti.MostrarPuntaje();
	tablero.innerHTML="";
	info_tablero.innerText="";
	this.ganador=false;
	this.jugadores=JSON.getForm(formulario);
	this.tablero=[];
	this.turno=0;
	for (var j=0;j<3;j++){
		var fila=[]
		this.tablero.push(fila);
		for (var i=0;i<3;i++){
			var elem=document.createElement("button");
			elem.innerText="-";
			elem.i=i;
			elem.j=j;
			fila.push(0);
			elem.onclick=this.step;
			tablero.appendChild(elem);
		}
		tablero.appendChild(document.createElement("br"));
	}
	turno_tablero.innerText="Es turno de Cruz "+tateti.jugadores.usuarioA;
}
tateti.victoria=function (){//devuelve -1 0 1 -> circulo nadie cruz
	var sum=0;
	var sum2=0;
	for (var i=0;i<3;i++){
		sum+=this.tablero[i][i];
		sum2+=this.tablero[i][2-i];
	}
	if (Math.abs(sum)==3){
			return sum/3;
	}
	if (Math.abs(sum2)==3){
			return sum2/3;
	}
	for (var j=0;j<3;j++){
		sum=0;
		for (var i=0;i<3;i++){
			sum+=this.tablero[j][i];
		}
		if (Math.abs(sum)==3){
			return sum/3;
		}
	}
	for (var i=0;i<3;i++){
		sum=0;
		for (var j=0;j<3;j++){
			sum+=this.tablero[j][i];
		}
		if (Math.abs(sum)==3){
			return sum/3;
		}
	}
	return 0;
}
tateti.step=function (e){
	var button=e.target; //tmb puede this
	if (tateti.ganador!=0)return;
	info_tablero.innerText="";
	if (tateti.tablero[button.j][button.i]!=0){
		info_tablero.innerText="Esa casilla ya esta ocupada!";
		return ;
	}
	if (tateti.turno%2==0){
		tateti.tablero[button.j][button.i]=1;
		button.innerText="X";
		turno_tablero.innerText="Es turno de Circulo "+tateti.jugadores.usuarioB;
	}
	else {
		tateti.tablero[button.j][button.i]=-1;
		button.innerText="O";
		turno_tablero.innerText="Es turno de Cruz "+tateti.jugadores.usuarioA;
	}
	tateti.turno++;
	tateti.ganador=tateti.victoria();
	if (tateti.ganador){
		turno_tablero.innerText="";
	}
	if (tateti.ganador==1){
		info_tablero.innerText="Ha ganado cruz! "+tateti.jugadores.usuarioA;
		tateti.puntajeX++;
		tateti.MostrarPuntaje();
	}
	else if (tateti.ganador==-1){
		info_tablero.innerText="Ha ganado circulo! "+tateti.jugadores.usuarioB;
		tateti.puntajeO++;
		tateti.MostrarPuntaje();
	}
	else if (tateti.turno==9){
	 tateti.ganador=true;
	 info_tablero.innerText="Empate!";
	 tateti.MostrarPuntaje();
	}
}

