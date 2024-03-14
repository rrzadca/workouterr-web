import { switchMap, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { AuthApiAppService } from '../api-app-services/auth-api-app.service';
import { User } from '../api';
import { StatefulClass } from '@utils/stateful-class';

interface AuthServiceState {
    currentUser: User | null;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService extends StatefulClass<AuthServiceState> {
    private readonly router = inject(Router);
    private readonly authApiAppService = inject(AuthApiAppService);
    private readonly localStorageService = inject(LocalStorageService);

    constructor() {
        super();

        this.createState({ currentUser: null });
    }

    get isAuthenticated(): boolean {
        return !!this.state.currentUser;
    }

    login(username: string, password: string): void {
        this.authApiAppService
            .signIn(username, password)
            .pipe(
                tap((response) => {
                    this.localStorageService.setItem(
                        'auth-token',
                        response.accessToken,
                    );
                }),
                switchMap((_) => this.authApiAppService.fetchCurrentUser()),
            )
            .subscribe((user) => {
                this.setState({ currentUser: user });
                this.router.navigateByUrl('/app');
            });
    }

    logout(): void {
        this.localStorageService.removeItem('auth-token');
        this.setState({ currentUser: null });
        this.router.navigateByUrl('/login');
    }

    getAuthToken(): string | null {
        return this.localStorageService.getItem('auth-token');
    }

    setCurrentUser(user: User | null): void {
        this.setState({ currentUser: user });
    }
}
