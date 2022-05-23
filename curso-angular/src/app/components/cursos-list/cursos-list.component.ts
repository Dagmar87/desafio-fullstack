import { Curso } from 'src/app/models/curso.model';
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  cursos?: Curso[];
  currentCurso: Curso = {};
  currentIndex = -1;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.retrieveCursos();
  }

  retrieveCursos(): void {
    this.cursoService.getAll()
      .subscribe({
        next: (data) => {
          this.cursos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCursos();
    this.currentCurso = {};
    this.currentIndex = -1;
  }

  setActiveCurso(curso: Curso, index: number): void {
    this.currentCurso = curso;
    this.currentIndex = index;
  }

  removeAllCursos(): void {
    this.cursoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}