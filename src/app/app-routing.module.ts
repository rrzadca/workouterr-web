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
        path: 'login',
        loadComponent: () =>
            import('./views/auth/login-view/login-view.component').then(
                (m) => m.LoginViewComponent,
            ),
    },
    {
        path: 'create-account',
        loadComponent: () =>
            import(
                './views/auth/create-account-view/create-account-view.component'
            ).then((m) => m.CreateAccountViewComponent),
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
