import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../Model/persona.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  personas!: Persona[];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
  /*   this.service.getPersonas().subscribe((data) => {
      this.personas = data;
    }); */
    this.service.mostrarDatos();
    this.personas=this.service.mostrarDatos();
    console.log(this.personas);
//    this.mostrar();
  }

  mostrar(){
    this.service.mostrarDatos();
    this.personas=this.service.mostrarDatos();
    console.log(this.personas);
    
  }
}

