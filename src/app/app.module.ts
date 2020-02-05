import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing } from './app.routes';

//servicios
 import { HttpClientModule } from '@angular/common/http';
 //import { PaisesService } from './servicios/paises.service';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LugaresComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    
  ],
  providers: [
    //PaisesService,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
