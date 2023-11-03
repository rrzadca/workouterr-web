import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./auth-view.component').then((m) => m.AuthViewComponent),
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () =>
            import('./views/login-view/login-view.component').then(
                (m) => m.LoginViewComponent,
            ),
    },
    {
        path: 'create-account',
        pathMatch: 'full',
        loadComponent: () =>
            import(
                './views/create-account-view/create-account-view.component'
            ).then((m) => m.CreateAccountViewComponent),
    },
] as Route[];
