import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './transloco-root.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UsersApiService } from './api/users/users-api.service';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from './api/users/user.model';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export function initializeAppFactory(
    userService: UsersApiService,
    authService: AuthService,
    router: Router,
): () => Observable<User | null> {
    return () =>
        userService.getCurrentUser().pipe(
            tap((user) => {
                if (user) {
                    authService.markAsLoggedIn();
                }
                router.initialNavigation();
            }),
            catchError((_) => {
                return of(null);
            }),
        );
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslocoRootModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAppFactory,
            deps: [UsersApiService, AuthService, Router],
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
