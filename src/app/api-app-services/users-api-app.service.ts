import { inject, Injectable } from '@angular/core';
import { CreateUserDto, User, UsersApiService } from '../api';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersApiAppService {
    private readonly usersApiService = inject(UsersApiService);

    create(dto: CreateUserDto): Observable<User> {
        return this.usersApiService.usersControllerCreate(dto);
    }
}
