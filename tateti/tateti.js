function Tateti(){
	var tateti={};
	var tablero=[];
	var turno=0;
	var termino=false;
	var ganador=0;
	var comprobarGanador=function (){
		var sum=0;
		var sum2=0
		;
		for (var i=0;i<3;i++){
			sum+=tablero[i][i];
			sum2+=tablero[i][2-i];
		}
		if (Math.abs(sum)==3){
				return sum/3;c
		}
		if (Math.abs(sum2)==3){
				return sum2/3;
		}
		for (var j=0;j<3;j++){
			sum=0;
			for (var i=0;i<3;i++){
				sum+=tablero[j][i];
			}
			if (Math.abs(sum)==3){
				return sum/3;
			}
		}
		for (var i=0;i<3;i++){
			sum=0;
			for (var j=0;j<3;j++){
				sum+=tablero[j][i];
			}
			if (Math.abs(sum)==3){
				return sum/3;
			}
		}
		return 0;
	}
	tateti.step=function (j,i){
		if (tablero[j][i]!=0 || termino){
			return false;
		}
		var v=1;
		if (turno%2==1)v=-1;
		tablero[j][i]=v;
		turno++;
		ganador=comprobarGanador();
		if (ganador!=0)termino=true;
		if (turno==9)termino=true;
		return true;
	}
	tateti.iniciar=function (){
		tablero=[];
		termino=false;
		ganador=0;
		turno=0;
		for (var j=0;j<3;j++){
			var fila=[];
			for (var i=0;i<3;i++){
				fila.push(0);
			}
			tablero.push(fila);
		}
	}
	tateti.termino=function (){
		return termino;
	}
	tateti.ganador=function (){
		return ganador;
	}
	tateti.tablero1=function (){console.log(tablero);}
	return tateti;
}
