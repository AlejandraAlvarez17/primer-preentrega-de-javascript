// Maria Alejandra Alvarez de los santos 
///function menu() {

      ///  let option

       // do {

         ///       option = prompt("1 -registrar Usuario \n 2 -Logear  usuario \n 3 - Configuracion \n 4-Operacion\n 5- Saliendo del programa ")
          ///      option = parseInt(option)



            ///    switch (option) {
               ///         case 1:
                             ///   alert(" ingresando al menu registrar usuario...")
                              //7  break
                 ///       case 2: alert("Ingresando al menu ,logear usuario...")
                              ///  break
                       /// case 3: alert("Ingresando al menu Configuracion...")
                               // break
                      ///  case 4: let num1 = parseFloat(prompt("ingrese el primer valor"))
                           ///     let num2 = parseFloat(prompt("ingrese el segundo valor"))
                             //   let operacion = prompt("ingrese la operacion:+ para la suma \n - para la resta \n / para la division\n * para la multiplicacion")
                              //  alert("El resultado es:" + calculadora(num1, num2, operacion))
                               // break
                       // case 5: alert("Chau...")
                               //   } while (option != 5)
//}
//menu()

//function calculadora(operando1, operando2, operacion) {
       // let resultado = 'error'

       // do {         
               // switch (operacion) {

                    //    case '+':
                              //  alert(resultado = operando1 + operando2)
                               // break
                       // case '-':
                            //    alert(resultado = operando1 - operando2)
                               // break
                       // case '*':
                            //    alert(resultado = operando1 * operando2)
                               // break
                       // case '/':
                               // alert(resultado = operando1 / operando2)
                               // break
                       // default:
                              //  alert('opcion invalida')
              //  }

              //  return resultado
       // } while (operacion != 0)

// }

///****************************************************************************************
//*****************************************************************************************
////
//console.log(usuario1[Apellido])

class Usuario{
        constructor(  nombre , apellido , edad , domicilio , documento ,actividades
                  ) 
  {        
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.domicilio = domicilio
    this.documento = documento
    this.actividades = actividades

       }
    saludar (){
         console.log("Hola soy" + this.nombre)
        }
  

  
}
 const usuario1 = new Usuario ("Alejandra", "Alvarez" ,36, " Doctor navarro gil 4 " ,4387097, "tennis", )
  usuario1.saludar() 

 const usuario2 = new Usuario  ("Martin" ,"Magnani", 39, " Doctor navarro gil 4 " ,4562900 , "natacion",)
 usuario2.saludar()

 const usuario3 = new Usuario   ("Maria", "Suarez",32 , " Belgrano 1360 " , 5609889 , "sala de musculacion",) 
  usuario3.saludar()


let usuarios= [usuario1,usuario2,usuario3]
usuarios.forEach(usuario =>{
        
  alert('El usuario se llama: ' + usuario.nombre + ' ' +usuario.apellido + 'y está en la actividad: ' +usuario.actividades)
})


/*function Usuario{(Usuario)=> (console.log(Usuario))}

console.log(actividades.actividades)*/

let actividadeselegido=prompt ("ingrese la actividad que desee")  
const filtroactividades=usuarios.filter(usuario=>usuario.actividades.includes(actividadeselegido))
alert("Cantidad de usuarios que tengan la actividad "+ actividadeselegido+ " " + filtroactividades.length)


const actividades=["natacion","tennis","apraratos", "gimnasia localizada ", "zumba"]
alert('Las actividades son: ' + actividades[0]+ ", "+ actividades[1]+ ", "+actividades[2]+", "+actividades[3]+", "+actividades[4])

