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
JSON.getForm2=function(html0form0elem,json){	
	var elems=html0form0elem;
	elems=elems.querySelectorAll("input,select,textarea");
	for (var i=0;i<elems.length;i++){
		JSON.set(json,elems[i].name,elems[i].value);
	} 
	return json;
}
JSON.get=function (json,string){
	var res=json;
	var nav=string.split(".");
	for (var i=0;i<nav.length && res!=undefined;i++){
		var key=nav[i];
		res=res[key];
	}
	return res;
}

JSON.setForm=function(html0form0elem,datos){
	var elems=html0form0elem;
  elems=elems.querySelectorAll("input,select,textarea");
  for (var i=0;i<elems.length;i++){
  	var value= JSON.get(datos,elems[i].name);
  	if (value!= undefined){
			elems[i].value= value;
		}
  } 
}
JSON.setHTML=function (htmlElem,htmlAttr,json){
	var children=htmlElem.children;
	for (var i=0;i<children.length;i++){
		var child=children[i];
		var key=child.getAttribute(htmlAttr);
		if (key==undefined)continue;
		var value=JSON.get(json,key);
		if (value!=undefined){
			child.innerText=value;
		}
	}
}

