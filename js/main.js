let compro = 0;
let percep =asignarOperacion("percepcion")
let imp =asignarOperacion("imppais")

let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra de Monedas Extranjeras\n 6 - Simular Venta de Monedas Extranjeras\n 7 - Conoce el Signo de Las Monedas Extranjeras\n 8 - Salir");
while (entrada != "8") {

    class Monedas {
        constructor(id, nombre, signo, compra, venta){
            this.id = parseInt(id);
            this.nombre = nombre.toUpperCase();
            this.signo = signo.toUpperCase();
            this.compra = parseFloat(compra);
            this.venta = parseFloat(venta);
    
        }
    }
    //declaramos el array de Monedas para Almacenar
    const moneda = [];
    moneda.push(new Monedas (1, "Dolar", "u$s", 210.82, 211.22));
    moneda.push(new Monedas (2, "Euros", "€", 229.5830, 230.5466));
    moneda.push(new Monedas (3, "Uruguayos", "$u", 4.21, 4.41));
    moneda.push(new Monedas (4, "Reales", "r$", 41.15, 43.75));
    
    switch (entrada) {
        case "1":
            alert("Cotizacion "+moneda [entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta);
            break;
        case "2":
            alert("Cotizacion "+moneda [entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta);
            break;
        case "3":
            alert("Cotizacion "+moneda [entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta);
            break;
        case "4":
            alert("Cotizacion "+moneda [entrada-1].nombre+": Compra "+moneda[entrada-1].compra+" / Venta "+moneda[entrada-1].venta);
            break;
        case "5":
            monto=prompt("Cuantos Pesos va cambiar a Moneda Extranjera ")
            if(monto > 0){
                for (const money of moneda){
                    compro = money.compra;
                    alert("Compra "+cotizarD(monto)+" "+money.nombre+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percep(monto)+"\n 30% de Impuesto Pais son $"+imp(monto));
                }
            }
            break;
        case "6": 
            monto=prompt("Cuanto en Moneda Extranjera desea Cambiar a Pesos")
            if(monto > 0){
                for (const money of moneda){
                    compro = money.venta;
                    alert("Recibe $"+cotizarP(monto)+" al Vender "+monto+" "+money.nombre);
                }   
            }
            break;
        case "7":
            buscar=prompt("Queres saber como es el signo para cada Moneda Extranjera\n (Dolar, Euros, Uruguayos, Reales)\n Ingresa la Moneda")
            if(buscar != "8"){
                const resultado = moneda.find((moneda)=>moneda.nombre === buscar.toUpperCase())
                alert(`El Signo para ${resultado.nombre} es ${resultado.signo}.`)
            }
            break;
        case "8": 
            // Salir
            break;
        default:
            alert("Ingrese un Codigo Válido");
            break;
    }
    entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra de Monedas Extranjeras\n 6 - Simular Venta de Monedas Extranjeras\n 7 - Conoce el Signo de Las Monedas Extranjeras\n 8 - Salir");
}

function cotizarD(monto) {
    return monto/= compro
}
function cotizarP(monto) {
    return monto*= compro
}
function asignarOperacion(op){
    if(op == "percepcion"){
        return (monto) => monto*= 0.35;
    }
    else if(op == "imppais"){
        return (monto) => monto*= 0.30;
    }
}
