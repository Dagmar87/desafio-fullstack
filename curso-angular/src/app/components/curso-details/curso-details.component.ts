import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCurso: Curso = {
    nome: '',
    professor: '',
    sala: 0,
    horarioInicio: new Date(),
    horarioFim: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
