//DEFINO VARIABLES GLOBALES
var tm = []; //CREO UN ARREGLO DONDE VOY A IR CARGANDO QUE TIPO DE MERCADO SALE PARA CADA MES 
var cv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO  LA CANTIDAD DE UNIDADES VENDIDAS PARA CADA MES (UNIDADES)
var tv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LAS VENTAS PARA CADA MES (PLATA)
var cu = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO EL COSTO POR UNIDAD DE CADA MES
var ct = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LOS COSTOS TOTALES DE CADA MES
var cantprod = []; //CREO UN ARREGLO PARA ALMACENAR CUANTOS PROD PRODUCIDOS HAY PARA CADA MES

// A PARTIR DE ACA PARA ABAJO VAN TODAS LAS FUNCIONES
function random(min,max) { //DEVUELVE UN RANDOM ENTRE 3 Y 10
    return (parseInt(Math.random()*(max - min)+ min)); 
    
}

function obtenerTipoMer(){ 
    for (i = 0; i < 12; i++) { //EN ESTA FUNCION POR CADA MES TIRO UN ALEATORIO Y DEPENDIENDO DE ESTE AGREGO EL TIPO DE MERCADO AL ARREGLO
        aleatorio = Math.random();
        if (aleatorio<0.125) {
            tm.push("Lento");
          } else if (aleatorio<0.75) {
            tm.push("Estable");
          } else {
            tm.push("Demandante");
          }
      }

      for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
        id = "TM"+i;
        document.getElementById(id).innerHTML = tm[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
      }
}

function obtenerUnidVen(){ //FUNCION PARA CARGAR EL ARREGLO DE UNIDADES VENDIDAS Y LUEGO MOSTRARLO EN EL HTML POR MEDIO DEL ID
    for (i = 0; i < 12; i++) { 
        if (tm[i]=="Lento") {
            cv.push(10000);
          } else if (tm[i]=="Estable") {
            cv.push(14000);
          } else {
            cv.push(22000);
          }
      }

      for (i = 1; i < 13; i++) { 
        id = "CantVent"+i;
        console.log(tm[i-1]);
        document.getElementById(id).innerHTML = cv[i-1];
      }
}

function obtenerVentas(){//FUNCION PARA CARGAR EL ARREGLO DE VENTAS Y LUEGO MOSTRARLO EN EL HTML POR MEDIO DEL ID
    for (i = 0; i < 12; i++) { 
        if (tm[i]=="Lento") {
            tv.push(cv[i]*15000);
          } else if (tm[i]=="Estable") {
            tv.push(cv[i]*12000);
          } else {
            tv.push(cv[i]*8000);
          }
      }

      for (i = 1; i < 13; i++) { 
        id = "TotVent"+i;
        document.getElementById(id).innerHTML = tv[i-1];
      }
}

function obtenerCostoUnidad(){ 
  for (i = 0; i < 12; i++) { //EN ESTA FUNCION POR CADA MES TIRO UN ALEATORIO Y DEPENDIENDO DE ESTE AGREGO EL TIPO DE MERCADO AL ARREGLO
      aleatorio = Math.random();
      if (aleatorio<0.13) {
          cu.push(4000);
        } else if (aleatorio<0.71) {
          cu.push(4500);
        } else {
          cu.push(5200);
        }
    }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "CostUn"+i;
      document.getElementById(id).innerHTML = cu[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerCostoTotal(){//FUNCION PARA CARGAR EL ARREGLO DE COSTO TOTAL Y LUEGO MOSTRARLO EN EL HTML POR MEDIO DEL ID
  for (i = 0; i < 12; i++) {//EN ESTA FUNCION MULTIPLICO LAS CANTIDAD DE UNIDADES VENDIDAS  
      
    }

 
}






function ejecutarFunciones() { //ESTA FUNCION AGRUPA EL CONJUNTO DE FUNCIONES A EJECUTAR CUNDO APRETAMOS SIMULAR
    obtenerTipoMer(); //ENTONCES HACE TODO AUTOMATICO
    obtenerUnidVen();
    obtenerVentas();
    obtenerCostoUnidad();
    obtenerCostoTotal();
}