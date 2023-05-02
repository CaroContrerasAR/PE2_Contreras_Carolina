let cotizcionD = 0;
let cotizcionP = 0;

let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S\n 7 - Simular Compra Euros €\n 8 - Simular Venta Euros €\n 9 - Simular Compra Uruguayos $U \n10 - Simular Venta Uruguayos $U\n11 - Simular Compra Reales R$\n12 - Simular Venta Reales R$");
while (entrada != "esc") {
    switch (entrada) {
        case "1":
            alert("Cotizacion DOLAR: Compra 210.82 / Venta 211.22 ");
            break;
        case "2":
            alert("Cotizacion EUROS: Compra 229.5830 / Venta 230.5466 ");
            break;
        case "3":
            alert("Cotizacion URUGUAYOS: Compra 4.21 / Venta 4.41  ");
            break;
        case "4":
            alert("Cotizacion REALES: Compra 41.15 / Venta 43.75 ");
            break;
        case "5": //Cotizacion DOLAR: Compra 210.82 / Venta 211.22
            cotizacionD = 210.82;
            monto=prompt("Cuantos Pesos va cambiar a U$S ")
            if(monto > 0){
            alert("Compra U$S "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "6": 
            cotizacionP = 211.22
            monto=prompt("Cuantos U$S desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender U$S "+monto);
            }
            break;
        case "7": //Cotizacion EUROS: Compra 229.5830 / Venta 230.5466
            cotizacionD = 229.5830
            monto=prompt("Cuantos Pesos va cambiar a € ")
            if(monto > 0){
            alert("Compra € "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "8": 
            cotizacionP = 230.5466
            monto=prompt("Cuantos € desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender € "+monto);
            }
            break;
        case "9": //Cotizacion URUGUAYOS: Compra 4.21 / Venta 4.41
            cotizacionD = 4.21
            monto=prompt("Cuantos Pesos va cambiar a $U ")
            if(monto > 0){
            alert("Compra $U "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "10":
            cotizacionP = 4.41
            monto=prompt("Cuantos $U desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender $U "+monto);
            }
            break;
        case "11": //Cotizacion REALES: Compra 41.15 / Venta 43.75
            cotizacionD = 41.15
            monto=prompt("Cuantos Pesos va cambiar a R$ ")
            if(monto > 0){
            alert("Compra R$ "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "12":
            cotizacionP = 43.75
            monto=prompt("Cuantos R$ desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender R$ "+monto);
            }
            break;
        default:
            alert("Ingrese un Codigo valido o esc para Salir");
            break;
    }
    entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Cotizar Uruguayos ($U)\n 4 - Cotizar Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S\n 7 - Simular Compra Euros €\n 8 - Simular Venta Euros €\n 9 - Simular Compra Uruguayos $U \n10 - Simular Venta Uruguayos $U\n11 - Simular Compra Reales R$\n12 - Simular Venta Reales R$");
}

function cotizarD(monto) {
    return monto/= cotizacionD
}
function cotizarP(monto) {
    return monto*= cotizacionP
}
function percepcion(monto) {
    return monto*= 0.35
}
function impPais(monto) {
    return monto*= 0.30
}