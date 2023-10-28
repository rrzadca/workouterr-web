import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedInSubject = new BehaviorSubject<boolean>(false);

    get loggedIn$(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }

    get isLoggedIn(): boolean {
        return this.loggedInSubject.getValue();
    }

    setLoggedIn(isLogged: boolean): void {
        this.loggedInSubject.next(isLogged);
    }
}
