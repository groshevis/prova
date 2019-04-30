import {Component} from '@angular/core';

@Component({
  selector: 'circulo-component',
  templateUrl: 'circulo.component.html'
})
export class CirculoComponent{

  raio : number; //atributos
  pi: number= 3.14;
  resultado: string;

  calcular(): void {
    let area = (Number(this.raio)*Number(this.raio))* Number(this.pi); // let define uma variável
    this.resultado = 'a área é:'+ area;
  }
}
