export default class App {
  
    esMayorOMenor(edad) {
        let resultado;

        resultado = edad >= 18 ? "Es mayor de Edad" : "Es menor de Edad";

        return resultado;

    }

    costoTotal(productos, costo) {
        let total = productos * costo;

        if(total > 2000) {
            let descuento = total * 0.15;
            total = total - descuento;
        }

        return total
    }

    obtenerMayor(numero1, numero2) {
        let mayor;

        if(numero1 > numero2) {
            mayor = numero1;
        } else {
            mayor = numero2 
        }

        return mayor;
    }

    esPositivo(numero) {
        let mensaje1;

        if(numero <= -1) {
            mensaje1  = -1;
        } else if (numero == 0) {
            mensaje1 = 0;
        } else if (numero >= 1) {
            mensaje1 = 1;
        }

        return mensaje1;
    }

    queToca(hora) { 
        let mensaje;

        if (hora < 10) {
            mensaje = "A desayunar!";
        } else if (hora < 12) {
            mensaje = "A almorzar!";
        } else if (hora < 16) {
            mensaje = "A comer!";
        } else if (hora < 22) {
            mensaje = "A cenar!";
        } else {
            mensaje = "A dormir!";
        }

        return mensaje;
        }

        /*Alternativa 
        queToca(hora) { 
        if (hora < 10) {
            return = "A desayunar!";
        } else if (hora < 12) {
            return = "A almorzar!";
        } else if (hora < 16) {
            return = "A comer!";
        } else if (hora < 22) {
            return = "A cenar!";
        } else {
            return = "A dormir!";
        }
        } */

        obtenerMayor3(numero1, numero2, numero3) {
            let mayor;

            if(numero1 > numero2  && numero1 > numero3) {
                mayor = numero1;
            } else if (numero2 > numero1  && numero2 > numero3) {
                mayor = numero2;
            } else {
                mayor = numero3;
            }

            return mayor;
        }

        puedeInscribirse(edad, recibo, credencial) {
            let inscribirse;

            if (edad >= 18  && (recibo == true || credencial == true)) {
                return true;
            } else {
                return false;
            }
        }
        
        descripcion(categoria) {
            let resultado;

            // categoria = categoria.toLowerCase(); es para lo puesto en mayusculas no choque con lo de mayusculas 

            switch(categoria) {
                case 'AA':
                    resultado = "Infantil";
                    break;
                case 'A':
                    resultado = "Todos";
                    break;
                case 'B':
                    resultado = "Adolescentes";
                    break;
                case 'C':
                    resultado = "Adultos";
                    break;
                default:
                    resultado = 'No valido!';

            }

            return resultado;
        }
    }

let app = new App();

console.log("Probando: esMayorOMenor()");
console.log(app.esMayorOMenor(20));
console.log(app.esMayorOMenor(15));

console.log("Probando: costoTotal()");
console.log(app.costoTotal(3, 500));
console.log(app.costoTotal(5, 500));

console.log("Probando obtenerMayor()");
console.log(app.obtenerMayor(5, 3));
console.log(app.obtenerMayor(10, 20));

console.log("Probando esPositivo()");
console.log(app.esPositivo(10));
console.log(app.esPositivo(0));
console.log(app.esPositivo(-10));

console.log("Probando queToca()");
console.log(app.queToca(9));
console.log(app.queToca(11));
console.log(app.queToca(15));
console.log(app.queToca(21));
console.log(app.queToca(23));

console.log("Probando obtenerMayor3()");
console.log(app.obtenerMayor3(3, 2, 1));
console.log(app.obtenerMayor3(2, 3, 1));
console.log(app.obtenerMayor3(2, 1, 3));

console.log("Probando puedeInscribirse()")
console.log(app.puedeInscribirse(17, true, true));
console.log(app.puedeInscribirse(19, false, true));
console.log(app.puedeInscribirse(19, true, false));
console.log(app.puedeInscribirse(19, false, false));

console.log("Probando descripcion()");
console.log(app.descripcion('AA'));
console.log(app.descripcion('A'));
console.log(app.descripcion('B'));
console.log(app.descripcion('C'));
console.log(app.descripcion('z'));
