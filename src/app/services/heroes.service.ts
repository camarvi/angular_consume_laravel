import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'http://127.0.0.1:8000/api/heroes/';

  constructor(private http : HttpClient) { }

  crearHeroe(heroe : HeroeModel){
    
    return this.http.post(`${ this.url }`, heroe)
      .pipe(
        map( (resp:any) => {
          heroe.id = resp.id;
          //heroe.nombre = resp.nombre;
          //heroe.poder = resp.poder;
          return heroe;
        })
      );
    
  }

  updateHeroe(heroe : HeroeModel){

    return this.http.put(`${ this.url}${ heroe.id}`, heroe);

  }

  deleteHeroe(id : number){
    
    return this.http.delete(`${ this.url }${ id }`); 
    
  }  


  getHeroes(){
    return this.http.get(`${this.url}`);
  }

  getHeroe(id : number){

    return this.http.get(`${this.url}${id}`)

  }


}
