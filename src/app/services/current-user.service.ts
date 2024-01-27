import { inject, Injectable, signal } from '@angular/core';
import { AuthenticateApiService, User } from '../api';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
    private readonly authenticateApiService = inject(AuthenticateApiService);

    currentUser$$ = signal<User | null>(null);

    fetchCurrentUser(): Observable<User | null> {
        return this.authenticateApiService
            .authenticateControllerCurrentUser()
            .pipe(
                tap((user) => {
                    this.currentUser$$.set(user);
                }),
            );
    }
}
