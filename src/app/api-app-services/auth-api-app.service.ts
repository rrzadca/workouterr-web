import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateApiService, SignInResponseDto } from '../api';

@Injectable({ providedIn: 'root' })
export class AuthApiAppService {
    private readonly authApiService = inject(AuthenticateApiService);

    signIn(username: string, password: string): Observable<SignInResponseDto> {
        return this.authApiService.authenticateControllerSignIn({
            username,
            password,
        });
    }
}
