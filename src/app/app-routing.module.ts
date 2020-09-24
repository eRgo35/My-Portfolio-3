import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path: '', component: HelloComponent, data: { animation: 'isFarLeft' } },
  { path: 'info', component: InfoComponent, data: { animation: 'isLeft' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' } },
  { path: 'hobbies', component: HobbiesComponent, data: { animation: 'isFarRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
