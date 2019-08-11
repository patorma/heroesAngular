import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
//quiere decir que esta propiedade heroe viene de afuera
 @Input() heroe:any = {};
 @Input() index:number;

 //se pone el evento el cual el padre esta escuchando
 // el heroeSeleccionado es un observable que se puede uno subscribir
 @Output() heroeSeleccionado:EventEmitter<number>;
  //en el constructor se debe inicializar el EventEmitter
  constructor(private router:Router) { 
     this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe(){
    this.heroeSeleccionado.emit( this.index )

    /* console.log(this.index)
    this.router.navigate(['/heroe',this.index]) */
  }

}
