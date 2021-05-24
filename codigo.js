var metros;

metros=prompt ("Ingrese cantidad de metros: "); 

if(metros >= 0 && metros < 1000) {
    document.write ("Pie"); 
} else if(metros >= 1000 && metros < 10000) {
    document.write ("Bicicleta")
} else if(metros >= 10000 && metros < 30000) {
    document.write ("Colectivo")
} else if(metros >= 30000 && metros < 100000) {
    document.write ("Auto")
} else if(metros >= 100000) {
    document.write ("Avión")
}

