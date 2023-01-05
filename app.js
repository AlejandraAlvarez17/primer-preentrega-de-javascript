function menu() {

        let opcion

        do {

                let option = parseInt(prompt("1 -registrar Usuario \n 2 -Logear  usuario \n 3 - Confijuracion \n 4-Operacion\n 5- saliendo del programa "))
                option = parseInt(option)
                {
                        case 1 :
                        alert(" ingresando al menu registrar usuario...")
                        break
                        case 2: alert("Ingresando al menu ,logear usuario...")
                        break
                        case 3: alert("Ingresando al menu Configuracion...")
                        break
                        case 4: let num1 = parseFloat(prompt("ingrese el primer valor"))
                        let num2 = parsefloat(prompt("ingrese el segundo valor"))
                        let Operacion = prompt("ingrese la operacion:+ para la suma\n - para la resta\n / para la division\n * para la multiplicacion")
                        alert("El resultado es:+ calculadora"(num1, num2, operacion))
                        break
                        case 5: alert("Chau...")

                        default: alert("Option invalida")

                }
        } while (opcion != 5)
 }
 menu()

  function calculadora(operando1, operando2, operancion) {
        let resultado = 'error'
        switch (operacion)(
                case '+':
        resultado = operando1 + operando2
        break
                case '-':
        resultado = operando1 - operando2
        break
                case '*':
        rsultado = operando1 * operando2
        break
                case '/':
        resultado = operando1 / operando2
        break
                default:
        alert('opcion invalida')
                        )

        return resultado
}



