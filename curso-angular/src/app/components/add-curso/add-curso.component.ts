import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  curso: Curso = {
    nome: '',
    professor: '',
    sala: 0,
    horarioInicio: new Date(),
    horarioFim: new Date(),
  }

  submitted = false;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
  }

  saveCurso(): void {
    const data = {
      nome: this.curso.nome,
      professor: this.curso.professor,
      sala: this.curso.sala,
      horarioInicio: this.curso.horarioInicio,
      horarioFim: this.curso.horarioFim
    };
    this.cursoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCurso(): void {
    this.submitted = false;
    this.curso = {
      nome: '',
      professor: '',
      sala: 0,
      horarioInicio: new Date(),
      horarioFim: new Date()
    };
  }
}
