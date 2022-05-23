import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'cursos', pathMatch: 'full' },
      { path: 'cursos', component: CursosListComponent },
      { path: 'cursos/:id', component: CursoDetailsComponent},
      { path: 'add', component: AddCursoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
