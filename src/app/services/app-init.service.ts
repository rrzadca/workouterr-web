import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppInitService {
    private readonly router = inject(Router);

    init(): void {
        this.router.initialNavigation();
    }
}
