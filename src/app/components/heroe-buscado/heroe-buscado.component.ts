import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html',
  styleUrls: ['./heroe-buscado.component.css']
})
export class HeroeBuscadoComponent implements OnInit {
  busqueda:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.busqueda = this._heroesService.buscarHeroes(params['termino'])
      this.termino = params['termino']
      console.log('hola')
      console.log(this.busqueda)
    })
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
 }

}
