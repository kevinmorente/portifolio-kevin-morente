import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { MainComponent } from './components/main/main.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
