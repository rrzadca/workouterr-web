import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { CreateUser } from './create-user.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
    private readonly epUrl = `${environment.apiHost}/users`;

    constructor(private readonly httpClient: HttpClient) {}

    create(saveDto: CreateUser): Observable<User> {
        return this.httpClient.post<User>(this.epUrl, {
            ...saveDto,
        });
    }

    findAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.epUrl);
    }

    getCurrentUser(): Observable<User | null> {
        return this.httpClient.get<User>(`${this.epUrl}/current`);
    }
}
