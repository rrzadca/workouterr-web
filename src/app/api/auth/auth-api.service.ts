import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { AuthToken } from './auth-token.model';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
    private readonly epUrl = `${environment.apiHost}/auth`;
    constructor(private readonly httpClient: HttpClient) {}

    login(username: string, password: string): Observable<AuthToken> {
        return this.httpClient.post<AuthToken>(`${this.epUrl}/login`, {
            username,
            password,
        });
    }
}
