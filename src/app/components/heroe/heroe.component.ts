import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls:['./heroe.component.css']
})
export class HeroeComponent {
  //variable local para usar en el template  
  heroe:any = {};
  marvel:boolean = true;
  dc:boolean =false;

  constructor(private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) { 
    //se necesita escuchar los cambios de los parametros
    //hay que subscribirse al observador
    //activatedRoute captura el parametro
    this.activatedRoute.params.subscribe( params =>{
      //console.log(params['id'])obtengo el elemento no el string 
      //se debe hacer referencia al servicio
      this.heroe = this._heroesService.getHeroe( params['id'])
      console.log(this.heroe)
      
    }) 
  }



}
