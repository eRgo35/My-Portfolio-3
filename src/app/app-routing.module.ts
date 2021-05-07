import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HelloComponent, data: { animation: 'isFarLeft' } },
  { path: 'info', component: InfoComponent, data: { animation: 'isLeft' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' } },
  { path: 'hobbies', component: HobbiesComponent, data: { animation: 'isFarRight' } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
