import { inject, Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);

    isAuthenticated = ():
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> =>
        this.authService.isAuthenticated$.pipe(
            take(1),
            tap((isAuthenticated) => {
                if (!isAuthenticated) {
                    this.router.navigateByUrl('/login');
                }
            }),
        );

    canActivate: CanActivateFn = this.isAuthenticated;
    canMatch: CanMatchFn = this.isAuthenticated;
}
