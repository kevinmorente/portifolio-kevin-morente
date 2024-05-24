import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
