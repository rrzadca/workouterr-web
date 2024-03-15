import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthApiAppService } from '../api-app-services/auth-api-app.service';

@Injectable({ providedIn: 'root' })
export class AppInitService {
    private readonly router = inject(Router);
    private readonly authApiAppService = inject(AuthApiAppService);
    private readonly authService = inject(AuthService);

    init(): void {
        this.authApiAppService.fetchCurrentUser().subscribe({
            next: (user) => {
                this.authService.setCurrentUser(user);
                this.router.initialNavigation();
            },
            error: () => {
                this.router.initialNavigation();
            },
        });
    }
}
