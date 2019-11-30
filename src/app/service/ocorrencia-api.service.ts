import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { throwError, Observable } from 'rxjs';
import { Ocorrencia } from '../ocorrencia';

@Injectable({
  providedIn: 'root'
})

export class OcorrenciaAPIService {
  apiURL : string = "http://localhost:8080/api/clientes";
  
  constructor(private httpClient: HttpClient) { }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
      getClientes(): Observable<Ocorrencia[]> {
        return this.httpClient.get <Ocorrencia[]>(this.apiURL)
        .pipe(retry(1),
        catchError(this.handleError))
    }
    createCliente(clie: Ocorrencia): Observable<Ocorrencia> {
      return this.httpClient.post<Ocorrencia>(`${this.apiURL}`, clie)
      .pipe(retry(1),
      catchError(this.handleError));
      }
}

