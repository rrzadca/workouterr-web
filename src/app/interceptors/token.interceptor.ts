import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private readonly authService: AuthService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const authToken = this.authService.getAuthToken();

        if (authToken) {
            const newRequest = req.clone({
                setHeaders: { Authorization: `Bearer ${authToken}` },
            });

            return next.handle(newRequest);
        }

        return next.handle(req);
    }
}
