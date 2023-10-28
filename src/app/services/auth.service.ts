import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedInSubject = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) {}

    get loggedIn$(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }

    get isLoggedIn(): boolean {
        return this.loggedInSubject.getValue();
    }

    login(): void {
        this.loggedInSubject.next(true);
    }

    logout(): void {
        this.loggedInSubject.next(false);
        this.router.navigateByUrl('/login');
    }
}
