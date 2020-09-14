import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'store',
        component: StoreComponent
    },
    {
        path: 'store/:filter',
        component: StoreComponent,
    },
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
