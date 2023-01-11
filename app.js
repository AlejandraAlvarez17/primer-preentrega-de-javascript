// Maria Alejandra Alvarez de los santos 
function menu() {

        let option

        do {

                option = prompt("1 -registrar Usuario \n 2 -Logear  usuario \n 3 - Configuracion \n 4-Operacion\n 5- Saliendo del programa ")
                option = parseInt(option)



                switch (option) {
                        case 1:
                                alert(" ingresando al menu registrar usuario...")
                                break
                        case 2: alert("Ingresando al menu ,logear usuario...")
                                break
                        case 3: alert("Ingresando al menu Configuracion...")
                                break
                        case 4: let num1 = parseFloat(prompt("ingrese el primer valor"))
                                let num2 = parseFloat(prompt("ingrese el segundo valor"))
                                let operacion = prompt("ingrese la operacion:+ para la suma \n - para la resta \n / para la division\n * para la multiplicacion")
                                alert("El resultado es:" + calculadora(num1, num2, operacion))
                                break
                        case 5: alert("Chau...")
                                break
                        default: alert("Option invalida")

                }

        } while (option != 5)
}
menu()

function calculadora(operando1, operando2, operacion) {
        let resultado = 'error'

        do {         
                switch (operacion) {

                        case '+':
                                alert(resultado = operando1 + operando2)
                                break
                        case '-':
                                alert(resultado = operando1 - operando2)
                                break
                        case '*':
                                alert(resultado = operando1 * operando2)
                                break
                        case '/':
                                alert(resultado = operando1 / operando2)
                                break
                        default:
                                alert('opcion invalida')
                }

                return resultado
        } while (operacion != 0)

}