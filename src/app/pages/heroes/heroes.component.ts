import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  heroes : any[] = [];
  cargando = false;

  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {

   /* this.heroesService.getHeroes()
    .subscribe( (resp:any) =>{
      console.log(resp);
      this.heroes = resp;
    }); */

    this.cargando = true;

    this.heroesService.getHeroes()
        .subscribe( (resp:any) => 
        {
          this.heroes = resp;
          this.cargando = false;
        });

  }

  borrarHeroe( heroe : HeroeModel, i: number ){

    Swal.fire({
      title : '¿Está seguro ?',
      text : `Esta seguro de borrar a ${ heroe.nombre }`,
      icon : 'question',
      showConfirmButton : true,
      showCancelButton : true
    }).then( resp => {

        if (resp.value)  {
          this.heroes.splice(i,1);

          this.heroesService.deleteHeroe(heroe.id)
              .subscribe();
        }

    });   

  

  }

}
