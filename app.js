let option = prompt("1 -registrar Usuario \n 2 -Logear  usuario \n 3 - Confijuracion \n 4- saliendo del programa" )
option = parseInt( option) 

 switch (option)
{
    case 1: 
           alert( " ingresando al menu registrar usuario...")
           break
    case 2: alert ("Ingresando al menu ,logear usuario...") 
           break
    case 3: alert("Ingresando al menu Configuracion...")   
            break
    case 4: alert("Saliendo del Programa...") 
            break  
    default : alert("Option invalida")                 

}
