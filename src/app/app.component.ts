import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Mundo";
  numero: number;
  nFactorial: number;
  cantidadCeros: number;
  montoTicket: number;
  ticketA: number;
  ticketB: number;
  excluir: string = "4";

  problemaUno() {
    this.nFactorial = this.calcularFactorial(this.numero);
    this.cantidadCeros = this.contarCeros(this.numero);
  }

  calcularFactorial(numero: number): number {
    var factorial = 1;
    var i: number;
    for (i = 2; i <= numero; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }

  /* Sabemos que obtenemos un cero al final solo si el número es múltiplo de 10 y sabemos que el 10 se obtiene de los factores 2 y 5. Dividir un número entre potencias de 5 nos dará la cantidad de 5s en sus factores. Entonces, la cantidad de 5s nos dirá el número de ceros a la derecha. */
  contarCeros(numero: number): number {
    var ceros = 0;
    var i: number;
    for (i = 5; numero / i >= 1; i *= 5) {
      ceros += numero / i;
    }
    return Math.trunc(ceros);
  }

  /* Problema: Ticket A + Ticket B = monto total, donde ni a ni b contienen el número 4.
  La idea es iterar desde i = 1 hasta montoTicket - 1, dentro del mismo loop llamamos a la fx conteo en donde condicionamos que el conteo de i y el conteo de montoTicket -i sean cero. La función conteo recorre la cadena de caracteres i y montoTicket-i, dado el largo de ambas, cuenta cuantas veces aparece el '4'. Entonces, volviendo a la fx calcularTickets, vamos a evaluar que el conteo de i sea cero y luego que el conteo de montoTicket - i sea cero, si se cumplen ambas condiciones, se imprimen ambos tickets.
     */
  calcularTickets() {
    var i: number;
    for (i = 1; i < this.montoTicket; i++) {
      if (this.conteo(i) == 0 && this.conteo(this.montoTicket - i) == 0) {
        this.ticketA = i;
        this.ticketB = this.montoTicket - i;
      }
    }
  }
  conteo(acumulado: number): number {
    var conteo = 0;
    var i: number;
    var string = acumulado.toString();
    for (i = 0; i < string.length; i++) {
      if (string[i] == this.excluir) {
        conteo = conteo + 1;
      }
    }
    return conteo;
  }
}
