import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { ListaOcorrenciaComponent } from './lista-ocorrencia/lista-ocorrencia.component';
import { NovoOcorrenciaComponent } from './novo-ocorrencia/novo-ocorrencia.component';

const routes: Routes = [
{ path: 'listagem', component: ListaOcorrenciaComponent },
{ path: 'novo', component:NovoOcorrenciaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
