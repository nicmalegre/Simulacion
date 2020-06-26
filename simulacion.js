//DEFINO VARIABLES GLOBALES
  var cantprod = []; //CREO UN ARREGLO PARA ALMACENAR CUANTOS PROD PRODUCIDOS HAY PARA CADA MES
  var uniddisp = []; //CREO UN ARREGLO PARA ALMACENAR LAS UNIDADES DISPONIBLES POR MES
  var cu = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO EL COSTO POR UNIDAD DE CADA MES
  var ct = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LOS COSTOS TOTALES DE CADA MES
  var tm = []; //CREO UN ARREGLO DONDE VOY A IR CARGANDO QUE TIPO DE MERCADO SALE PARA CADA MES 
  var demandaDelMes = []; //CREO UN ARREGLO PARA VER CUANTA DEMANDA TUVIMOS EN CADA MES
  var cv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO  LA CANTIDAD DE UNIDADES VENDIDAS PARA CADA MES (UNIDADES)
  var tv = [];//CREO UN ARREGLO DONDE VOY A IR CARGANDO LAS VENTAS PARA CADA MES (PLATA)
  
  
  var demnosat = []; //CREO UN ARREGLO PARA ALMACENAR LA DEMANDA NO SATISFECHA DE CADA MES
  var costOp = []; //CREO UN ARREGLO PARA ALMACENAR EL COSTO DE OPORTUNIDAD DE CADA MES
  var ganancia = []; //EN ESTE ARREGLO VOY ALMACENANDO LA GANANCIA DE CADA MES



// A PARTIR DE ACA PARA ABAJO VAN TODAS LAS FUNCIONES
function inicializar(){
   tm = []; 
   cv = [];
   tv = [];
   cu = [];
   ct = [];
   cantprod = [];
   uniddisp = [];
   demnosat = []; 
   costOp = []; 
   ganancia = [];
   demandaDelMes = []; 
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

function obtenerUnidadesDisp(){//Esta funcion es para obtener cuantas unidades tenemos disponibles por mes
  var sobraMesAnterior = 0;
  for (i = 0; i < 12; i++) { 
    if (i==0){//Si i=0 quiere decir que es el Mes 1
      uniddisp.push(cantprod[i]); //El primer mes el valor de unidades disponibles es el valor de cantidad producidas. No hay nada anterior
    } else{
      if ((uniddisp[i-1]-cv[i-1])>0){ //Si unidades disponibles del mes anterior - cantidad vendidas del mes anterior 
                                      //es mayor a 0 quiere decir que hay sobrante el mes anterior y asigno ese sobrante a la variable
        sobraMesAnterior = (uniddisp[i-1]-cv[i-1]);
      } else {
        sobraMesAnterior = 0; //Si no hay sobrante entonces le asignamos 0 nomás
      }
      uniddisp.push(cantprod[i]+sobraMesAnterior); //Agrego en unidades disponibles la cantidad producida mas lo que sobro el mes anterior 
    }
  }

  for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
    id = "UnidDisp"+i;
    document.getElementById(id).innerHTML = uniddisp[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
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

function obtenerCostoTotal(){// ANTES DE ESTA FUNCION TENEMOS QUE EJECUTAR LA DE OBTENERCANTPRODUCIDA O SINO NO PUEDE MULTIPLICAR
  for (i = 0; i < 12; i++) { //MULTIPLICO EL COSTO POR UNIDAD CON LA CANTIDAD DE PRODUCTOS PRODUCIDOS Y GUARDO EN EL ARREGLO ct
      ct.push(cu[i]*cantprod[i]);
    }

    for (i = 1; i < 13; i++) {//POR CADA MES LE VOY PASANDO EL VALOR QUE ESTA EN EL ARREGLO 
      id = "CostTot"+i;
      document.getElementById(id).innerHTML = ct[i-1]; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
    }
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
        document.getElementById(id).innerHTML = "<b>" + tm[i-1] + "</b>"; //Hago i-1 porque este ciclo va de 1 a 12 y el arreglo de 0 a 11
      }
}

function obtenerDemanda(){//Con esta funcion vemos cuanto nos demanda el mercado para este mes
  for (i = 0; i < 12; i++) { 
    if (tm[i]=="Lento") {
      demandaDelMes.push(10000);
      } else if (tm[i]=="Estable") {
        demandaDelMes.push(14000);
      } else {
        demandaDelMes.push(22000);
      }
  }

  for (i = 1; i < 13; i++) { 
    id = "Demanda"+i;
    document.getElementById(id).innerHTML = demandaDelMes[i-1];
  }
}

function obtenerUnidVen(){ //FUNCION PARA CARGAR EL ARREGLO DE UNIDADES VENDIDAS Y LUEGO MOSTRARLO EN EL HTML POR MEDIO DEL ID
    for (i = 0; i < 12; i++) { 
        if (demandaDelMes[i]>uniddisp[i]) {//Si mi demanda es mayor a mis unidades disponibles solo le vendo mis unidades disponibles
            cv.push(uniddisp[i]);
          } else{ 
            cv.push(demandaDelMes[i]);
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

function obtenerDemandaNoSatis(){
  for (i = 0; i < 12; i++) { 
    if (demandaDelMes[i]>uniddisp[i]) {//SI CANT UNID VENDIDAS ES MAYOR A CANT UNIDADES PRODUCIDAS QUIERE DECIR QUE TENEMOS DEMANDA NO SATISFECHA
      demnosat.push(demandaDelMes[i]-uniddisp[i]); //Agrego a demnosat cuantas unidades son las que no pude satisfacer
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
    obtenerCantProducida();
    
    obtenerCostoUnidad();
    obtenerCostoTotal();//Hay que tener cuidado de ejecutar esta despues de obtenerCantPruducida 
                        //porque si no tenemos cuantas unidades producimos no podemos saber el costo total
    obtenerTipoMer(); //ENTONCES HACE TODO AUTOMATICO
    obtenerDemanda();
    obtenerUnidVen();
    obtenerVentas();
    obtenerUnidadesDisp(); //Esta funcion tiene que estar despues de obtener ventas porque sino no puede calcular el nuevo stock
    obtenerDemandaNoSatis();
    obtenerCostoOportunidad();
    obtenerGanancia();
    obtenerGananciaTotal();
}