import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORTAR ARCHIVO DE RUTAS, QUE HE CREADO ANTES
import { AppRoutingModule} from './app-routing.module';

//PARA PODER TRABAJAR CON FORMULARIOS
import { FormsModule } from '@angular/forms';

//PARA PODER HACER PETICIONES HTTP A UNA APIREST
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
