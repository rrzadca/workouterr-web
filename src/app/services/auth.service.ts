import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../api/auth/auth-api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(
        private readonly router: Router,
        private readonly authApiService: AuthApiService,
        private readonly localStorageService: LocalStorageService,
    ) {}

    get loggedIn$(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }

    get isLoggedIn(): boolean {
        return this.loggedInSubject.getValue();
    }

    login(username: string, password: string): void {
        this.authApiService.login(username, password).subscribe((authToken) => {
            this.localStorageService.setItem('auth-token', authToken.token);
            this.loggedInSubject.next(true);
            this.router.navigateByUrl('/app');
        });
    }

    logout(): void {
        this.localStorageService.removeItem('auth-token');
        this.loggedInSubject.next(false);
        this.router.navigateByUrl('/login');
    }

    getAuthToken(): string | null {
        return this.localStorageService.getItem('auth-token');
    }

    markAsLoggedIn(): void {
        this.loggedInSubject.next(true);
    }
}
