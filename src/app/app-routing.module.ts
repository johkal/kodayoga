import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent
// },
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'store',
    component: StoreComponent
},
// {
//     path: 'courses',
//     component: CoursesComponent
// },
{
    path: '',
    component: AppComponent,
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
