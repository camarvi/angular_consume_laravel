import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

//IMPORTAR SWEETALERT2
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroesService: HeroesService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    if (id !== 'nuevo'){ //EDITAR UN REGISTRO
    this.heroesService.getHeroe( parseInt(id) )
        .subscribe( (resp:HeroeModel) => {
          console.log(resp);
          this.heroe = resp[0];
        });
    }

  }


  guardar(form : NgForm){

    if (form.invalid) {
      console.log('Formulario no valido');
      return;

    }

    Swal.fire({
      title : 'Espere',
      text : 'Guardando informacion',
      icon : 'info',
      allowOutsideClick : false
    });

    Swal.showLoading();

    let peticion : Observable<any>;

   /* if (this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
        .subscribe(resp => {
          console.log(resp);
        });
    } else {
      this.heroesService.crearHeroe(this.heroe)
        .subscribe( resp =>{
      console.log(resp);
    })*/

    if (this.heroe.id){
      peticion = this.heroesService.updateHeroe(this.heroe);
    } else { //NUEVO REGISTRO 
      
      peticion = this.heroesService.crearHeroe(this.heroe);
       
    }

   peticion.subscribe(resp=>{
      
    Swal.fire({
      title : this.heroe.nombre,
      text : 'Se actualizó correctamente',
      icon : 'success' 

    });
    
   });
    
  }

 

}
