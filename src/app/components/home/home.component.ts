import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  paises:any [] = [];

  constructor(private _servicio:PaisesService) { 
    //console.log(this._servicio);
    this._servicio.getPaises().subscribe((respuesta:any) => {
      console.log(respuesta);

      this.paises=respuesta;
    })
  }

  ngOnInit() {
  }

}
