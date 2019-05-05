import {Component} from '@angular/core';

@Component({
  selector:'retangulo-component',
  templateUrl:'retangulo.component.html'
})

export class RetanguloComponent{

    resultado: String;
    lado1: number;
    lado2: number;

    calcular(): void{

     let area = Number(this.lado1)* Number(this.lado2);
     this.resultado="A área do retângulo é "+area;
    }

}
