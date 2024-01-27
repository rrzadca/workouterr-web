import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CurrentUserService } from './current-user.service';
import { TestService } from '../api-app-services/test-service';

@Injectable({ providedIn: 'root' })
export class AppInitService {
    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);
    private readonly currentUserService = inject(CurrentUserService);

    private readonly testService = inject(TestService);

    init(): void {
        this.currentUserService.fetchCurrentUser().subscribe((user) => {
            this.authService.markAsAuthenticated(!!user);
            this.router.initialNavigation();
        });
        /* this.testService.fetchCurrentUser().subscribe((user) => {
            this.authService.markAsAuthenticated(!!user);
            this.router.initialNavigation();
        });*/
    }
}
