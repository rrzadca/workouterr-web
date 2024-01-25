import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app',
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./views/auth/views/login-view/login-view.component').then(
                (m) => m.LoginViewComponent,
            ),
    },
    {
        path: 'create-account',
        loadComponent: () =>
            import(
                './views/auth/views/create-account-view/create-account-view.component'
            ).then((m) => m.CreateAccountViewComponent),
    },
    {
        path: 'app',
        loadChildren: () =>
            import('./views/app/app-view.routes').then((r) => r.routes),
    },
    {
        path: 'doc',
        loadComponent: () =>
            import('./views/doc/doc.component').then((m) => m.DocComponent),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            initialNavigation: 'disabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
