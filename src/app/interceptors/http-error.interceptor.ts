import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
    private readonly authService = inject(AuthService);

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap({
                error: (err) => {
                    if (
                        err instanceof HttpErrorResponse &&
                        err.status === 401
                    ) {
                        this.authService.logout();
                    }
                    return of(err);
                },
            }),
        );
    }
}
