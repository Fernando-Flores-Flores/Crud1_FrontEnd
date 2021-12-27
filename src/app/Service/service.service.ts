import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona } from '../Persona/Model/persona.model';
@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  public personas: Persona[] = [];
  constructor(private http: HttpClient) {}

  /*      Url="http://localhost:8080/Ejemplo001/personas/lista";  
  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  } */

  // apiUrl: string = `http://apides.gestora.bo:9090/persona/segip/certificarDatosPersona`;
  ngOnInit(): void {}

  apiUrl: string = 'http://localhost:8080/personas/lista';

  mostrarDatos() {
    //const params = new HttpParams().set('numeroDocumento', carnet);
    this.http.get<Persona>(this.apiUrl).subscribe(
      (resp: any) => {
        this.personas = resp;
      //  console.log(resp);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        console.log('completed');
      }
    );
      return this.personas;
     
  }
}
