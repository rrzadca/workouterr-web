import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { AuthApiAppService } from '../api-app-services/auth-api-app.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

    private readonly router = inject(Router);
    private readonly authApiService = inject(AuthApiAppService);
    private readonly currentUserService = inject(CurrentUserService);
    private readonly localStorageService = inject(LocalStorageService);

    constructor() {}

    get isAuthenticated$(): Observable<boolean> {
        return this.isAuthenticatedSubject.asObservable();
    }

    login(username: string, password: string): void {
        this.authApiService
            .signIn(username, password)
            .pipe(
                tap((response) => {
                    this.localStorageService.setItem(
                        'auth-token',
                        response.accessToken,
                    );
                }),
                switchMap((_) => this.currentUserService.fetchCurrentUser()),
            )
            .subscribe((_) => {
                this.isAuthenticatedSubject.next(true);
                this.router.navigateByUrl('/app');
            });
    }

    logout(): void {
        this.localStorageService.removeItem('auth-token');
        this.currentUserService.currentUser$$.set(null);
        this.isAuthenticatedSubject.next(false);
        this.router.navigateByUrl('/login');
    }

    getAuthToken(): string | null {
        return this.localStorageService.getItem('auth-token');
    }

    markAsAuthenticated(isAuthenticated: boolean): void {
        this.isAuthenticatedSubject.next(isAuthenticated);
    }
}
