import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  buscarHeroe(termino:string){
    //aqui se direcciona a la nueva pantalla 
    console.log(termino)
    this.router.navigate(['/search',termino])

  }
}
