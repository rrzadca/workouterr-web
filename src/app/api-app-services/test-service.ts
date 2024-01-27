import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../api';

@Injectable({ providedIn: 'root' })
export class TestService {
    private readonly httpClient = inject(HttpClient);

    fetchCurrentUser(): Observable<User> {
        return this.httpClient.get<User>(
            'http://localhost:3000/authenticate/current-user',
        );
    }
}
