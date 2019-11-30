import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOcorrenciaComponent } from './lista-ocorrencia/lista-ocorrencia.component';
import { NovoOcorrenciaComponent } from './novo-ocorrencia/novo-ocorrencia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOcorrenciaComponent,
    NovoOcorrenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
