//DEFINO VARIABLES GLOBALES
var tm = []; //CREO UN ARREGLO DONDE VOY A IR CARGANDO QUE TIPO DE MERCADO SALE PARA CADA MES 
var cv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO  LA CANTIDAD DE VENTAS PARA CADA MES (UNIDADES)
var tv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LAS VENTAS PARA CADA MES (PLATA)

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
        mes = "TM"+i;
        document.getElementById(mes).innerHTML = tm[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
      }

}

function obtenerUnidVen(){
    for (i = 0; i < 12; i++) { 
        if (tm[i]="Lento") {
            cv.push(10000);
          } else if (tm[i]="Estable") {
            cv.push(14000);
          } else {
            cv.push(22000);
          }
      }

      for (i = 1; i < 13; i++) { 
        mes = "CantVent"+i;
        console.log(tm[i-1]);
        document.getElementById(mes).innerHTML = cv[i-1];
      }

}

function obtenerTotalVentas(){
    for (i = 0; i < 12; i++) { 
        if (tm[i]="Lento") {
            cv.push(10000);
          } else if (tm[i]="Estable") {
            cv.push(14000);
          } else {
            cv.push(22000);
          }
      }

      for (i = 1; i < 13; i++) { 
        mes = "CantVent"+i;
        console.log(mes);
        document.getElementById(mes).innerHTML = cv[i-1];
      }

}


function ejecutarFunciones() { //ESTA FUNCION AGRUPA EL CONJUNTO DE FUNCIONES A EJECUTAR CUNDO APRETAMOS SIMULAR
    obtenerTipoMer(); //ENTONCES HACE TODO AUTOMATICO
    obtenerUnidVen();
}