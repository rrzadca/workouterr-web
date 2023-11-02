import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { CreateUser } from './create-user.model';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
    constructor(private readonly httpClient: HttpClient) {}

    create(saveDto: CreateUser): Observable<User> {
        return this.httpClient.post<User>('https://localhost:3000/users', {
            ...saveDto,
        });
    }

    findAll(): Observable<User> {
        return this.httpClient.get<User>('https://localhost:3000/users');
    }
}
