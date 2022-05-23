import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css'],
})
export class CursoDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCurso: Curso = {
    nome: '',
    professor: '',
    sala: 0,
    horarioInicio: new Date(),
    horarioFim: new Date(),
  };

  message = '';

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '';
      this.getCurso(this.route.snapshot.params["id"]);
    }
  }

  getCurso(id: string): void {
    this.cursoService.get(id).subscribe({
      next: (data) => {
        this.currentCurso = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateCurso(): void {
    this.message = '';
    this.cursoService.update(this.currentCurso.id, this.currentCurso)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este curso foi atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCurso(): void {
    this.cursoService.delete(this.currentCurso.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/cursos']);
        },
        error: (e) => console.error(e)
      });
  }
}