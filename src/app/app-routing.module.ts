import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./views/auth/login-view/login-view.component').then(
                (m) => m.LoginViewComponent,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
