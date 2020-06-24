//DEFINO VARIABLES GLOBALES
  var tm = []; //CREO UN ARREGLO DONDE VOY A IR CARGANDO QUE TIPO DE MERCADO SALE PARA CADA MES 
  var cv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO  LA CANTIDAD DE UNIDADES VENDIDAS PARA CADA MES (UNIDADES)
  var tv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LAS VENTAS PARA CADA MES (PLATA)
  var cu = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO EL COSTO POR UNIDAD DE CADA MES
  var ct = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LOS COSTOS TOTALES DE CADA MES
  var cantprod = []; //CREO UN ARREGLO PARA ALMACENAR CUANTOS PROD PRODUCIDOS HAY PARA CADA MES
  var demnosat = []; //CREO UN ARREGLO PARA ALMACENAR LA DEMANDA NO SATISFECHA DE CADA MES
  var costOp = []; //CREO UN ARREGLO PARA ALMACENAR EL COSTO DE OPORTUNIDAD DE CADA MES
  var ganancia = []; //EN ESTE ARREGLO VOY ALMACENANDO LA GANANCIA DE CADA MES

function inicializar(){
   tm = []; //CREO UN ARREGLO DONDE VOY A IR CARGANDO QUE TIPO DE MERCADO SALE PARA CADA MES 
   cv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO  LA CANTIDAD DE UNIDADES VENDIDAS PARA CADA MES (UNIDADES)
   tv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LAS VENTAS PARA CADA MES (PLATA)
   cu = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO EL COSTO POR UNIDAD DE CADA MES
   ct = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LOS COSTOS TOTALES DE CADA MES
   cantprod = []; //CREO UN ARREGLO PARA ALMACENAR CUANTOS PROD PRODUCIDOS HAY PARA CADA MES
   demnosat = []; //CREO UN ARREGLO PARA ALMACENAR LA DEMANDA NO SATISFECHA DE CADA MES
   costOp = []; //CREO UN ARREGLO PARA ALMACENAR EL COSTO DE OPORTUNIDAD DE CADA MES
   ganancia = []; //EN ESTE ARREGLO VOY ALMACENANDO LA GANANCIA DE CADA MES
}

// A PARTIR DE ACA PARA ABAJO VAN TODAS LAS FUNCIONES

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

function obtenerCantProducida(){ 
  for (i = 0; i < 12; i++) { 
      aleatorio = Math.random();
      if (aleatorio<0.04) {
        cantprod.push(13000);
        } else if (aleatorio<0.08) {
          cantprod.push(14000);
        } else if(aleatorio<0.16){
          cantprod.push(15000);
        } else if (aleatorio<0.2999) {
          cantprod.push(16000)
        } else{
          cantprod.push(17000)
        }
    }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "CantProdProd"+i;
      document.getElementById(id).innerHTML = cantprod[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerCostoTotal(){// ANTES DE ESTA FUNCION TENEMOS QUE EJECUTAR LA DE OBTENERCANTPRODUCIDA O SINO NO PUEDE MULTIPLICAR
  for (i = 0; i < 12; i++) { //MULTIPLICO EL COSTO POR UNIDAD CON LA CANTIDAD DE PRODUCTOS PRODUCIDOS Y GUARDO EN EL ARREGLO ct
      ct.push(cu[i]*cantprod[i]);
    }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "CostTot"+i;
      document.getElementById(id).innerHTML = ct[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerDemandaNoSatis(){
  for (i = 0; i < 12; i++) { 
    if (cv[i]>cantprod[i]) {//SI CANT UNID VENDIDAS ES MAYOR A CANT UNIDADES PRODUCIDAS QUIERE DECIR QUE TENEMOS DEMANDA NO SATISFECHA
      demnosat.push(cv[i]-cantprod[i]); //Agrego a demnosat cuantas unidades son las que no pude satisfacer
    } else {
      demnosat.push(0); //Agrego a demnosat un cero simplemente porque no tengo demanda no satisfechas
    } 
  }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "DemNoSat"+i;
      document.getElementById(id).innerHTML = demnosat[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerCostoOportunidad(){
  for (i = 0; i < 12; i++) { 
    costOp.push(demnosat[i]*1000); //MULTIPLICO LA DEM NO SATISFECHA POR 1000 Y AGREGO EN EL ARREGLO DE COSTO DE OPORTUNIDAD
  }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "CostOp"+i;
      document.getElementById(id).innerHTML = costOp[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerGanancia(){
  for (i = 0; i < 12; i++) { 
    if (i<6){ //Con este condicional controlo de si es el primer semestre o el segundo para calcular el costo fijo
              //Pregunta si es menor a 6 porque el arreglo comienza en 0, es decir, de 0 a 5 es el primer semestre
      costofijo = 600000;
    } else{
      costofijo = 900000;
    }
    ganancia.push(tv[i]-ct[i]-costofijo-costOp[i]); //Calculo la ganancia con la formula del escenario
  }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "Ganancia"+i;
      document.getElementById(id).innerHTML = "$" + ganancia[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
}

function obtenerGananciaTotal(){
  var gananciaTotal = 0; //Hay que inicializar a 0 porque es un acumulador
  for (i = 0; i < 12; i++) { 
    gananciaTotal = gananciaTotal + ganancia[i]; //Sumo en una variable las ganancias de cada mes para obtener el total
  }

  document.getElementById("gananciaTotal").innerHTML = "$" + gananciaTotal;
}






function ejecutarFunciones() { //ESTA FUNCION AGRUPA EL CONJUNTO DE FUNCIONES A EJECUTAR CUNDO APRETAMOS SIMULAR
    inicializar();
    obtenerTipoMer(); //ENTONCES HACE TODO AUTOMATICO
    obtenerUnidVen();
    obtenerVentas();
    obtenerCostoUnidad();
    obtenerCantProducida();
    obtenerCostoTotal();//Hay que tener cuidado de ejecutar esta despues de obtenerCantPruducida 
                        //porque si no tenemos cuantas unidades producimos no podemos saber el costo total
    obtenerDemandaNoSatis();
    obtenerCostoOportunidad();
    obtenerGanancia();
    obtenerGananciaTotal();
}