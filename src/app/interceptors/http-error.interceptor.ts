import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HttpErrorInterceptor implements HttpInterceptor {
    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((httpResponseWithError) => {
                if (httpResponseWithError instanceof HttpErrorResponse) {
                    switch (httpResponseWithError.status) {
                        case 400:
                            this.handleBadRequestError(httpResponseWithError);
                            break;
                        case 401:
                            this.handleNotAuthenticatedError();
                            break;
                        case 403:
                            this.handleUnauthorizeLoggedError(
                                httpResponseWithError,
                            );
                            break;
                        case 404:
                            this.handleNotFoundError();
                            break;
                        case 500:
                            this.handleServerError();
                            break;
                    }
                }

                return throwError(httpResponseWithError);
            }),
        );
    }

    private handleBadRequestError(httpError: HttpErrorResponse): void {
        // TODO: show notification with error
    }

    private handleNotAuthenticatedError(): void {
        if (this.router.url.startsWith('/login')) {
            this.router.navigateByUrl('/login');
        }

        this.authService.setCurrentUser(null);
    }

    private handleUnauthorizeLoggedError(httpResponseWithError: any): void {
        // TODO: redirect to not authorized page with back button
    }

    private handleNotFoundError(): void {
        // TODO: redirect to 404 page with back button
    }

    private handleServerError(): void {
        // TODO: show notification about unexpected error
    }
}
