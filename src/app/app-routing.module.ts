import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app',
    },
    {
        path: 'auth',
        loadComponent: () =>
            import('./views/auth/auth-view.component').then(
                (m) => m.AuthViewComponent,
            ),
        loadChildren: () => import('./views/auth/auth-view.routes'),
    },
    {
        path: 'app',
        loadComponent: () =>
            import('./views/app/app-view.component').then(
                (m) => m.AppViewComponent,
            ),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
    },
    {
        path: 'doc',
        loadComponent: () =>
            import('./views/doc/doc.component').then((m) => m.DocComponent),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
