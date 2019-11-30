import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../ocorrencia';
import { OcorrenciaAPIService } from '../service/ocorrencia-api.service';

@Component({
  selector: 'has-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit {
  Ocorrencias : Ocorrencia[];

  constructor(private service: OcorrenciaAPIService) { }
  ngOnInit() {
    this.service
    .getClientes()
    .subscribe((data: Ocorrencia[]) => this.Ocorrencias = data,
    error => console.log(error));
    }

}
