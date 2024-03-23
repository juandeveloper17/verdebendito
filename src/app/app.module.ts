import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { NuestrosPlanesComponent } from './nuestros-planes/nuestros-planes.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { OfrecemosNuestraMotivacionComponent } from './ofrecemos-nuestra-motivacion/ofrecemos-nuestra-motivacion.component';
import { NuestrosplatillosSliderComponent } from './nuestrosplatillos-slider/nuestrosplatillos-slider.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Seccion1Component,
    NuestrosPlanesComponent,
    SobreNosotrosComponent,
    FooterComponent,
    OfrecemosNuestraMotivacionComponent,
    NuestrosplatillosSliderComponent,
    MisionVisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
