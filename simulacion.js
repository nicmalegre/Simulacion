function random(min,max) { //DEVUELVE UN RANDOM ENTRE 3 Y 10
    return (parseInt(Math.random()*(max - min)+ min)); 
    
}

function obtenerCantCli(){
    CliMes1 = random(3,10);
    CliMes2 = random(3,10);
    CliMes3 = random(3,10);
    CliMes4 = random(3,10);
    CliMes5 = random(3,10);

    document.getElementById("CliMes1").innerHTML = CliMes1;
    document.getElementById("CliMes2").innerHTML = CliMes2;
    document.getElementById("CliMes3").innerHTML = CliMes3;
    document.getElementById("CliMes4").innerHTML = CliMes4;
}


function ejecutarFunciones() { //ESTA FUNCION AGRUPA EL CONJUNTO DE FUNCIONES A EJECUTAR CUNDO APRETAMOS SIMULAR
    obtenerCantCli(); //ENTONCES HACE TODO AUTOMATICO
}