JSON.set=function (json,string,value){
 		var res=json;
 		var nav=string.split(".");
 		var aux;
 		for (var i=0;i<nav.length-1 && res!=undefined;i++){
 			var key=nav[i];
 			aux=res;
 			res=res[key];
 		}
 		if (res==undefined){
 			res=aux;
 			for (var i=i-1;i<nav.length-1 && res!=undefined;i++){
	 			var key=nav[i];
	 			res[key]={};
	 			res=res[key];
 			}
 		}
 		res[nav.pop()]=value;
 		return json;
}
JSON.getForm=function(html0form0elem){
 		
	var elems=html0form0elem;
	elems=elems.querySelectorAll("input,select,textarea");
	var json={};
	for (var i=0;i<elems.length;i++){
		JSON.set(json,elems[i].name,elems[i].value);
	} 
	return json;
}

