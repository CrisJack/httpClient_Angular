import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable(
//en caso de no tener "{ providedIn: 'root' }" declararlo en app.module.ts
{
  providedIn: 'root'
})
export class PaisesService {

  

  constructor(private http:HttpClient) { 
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(data =>{
    //     console.log(data);
    // })
  }
getPaises(){

  return this.http.get('https://restcountries.eu/rest/v2/lang/es')
}

}
