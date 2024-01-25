import {
    APP_INITIALIZER,
    enableProdMode,
    importProvidersFrom,
} from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { TranslocoRootModule } from './app/transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    HTTP_INTERCEPTORS,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { TokenInterceptor } from './app/interceptors/token.interceptor';
import { HttpErrorInterceptor } from './app/interceptors/http-error.interceptor';
import { AppInitService } from './app/services/app-init.service';

if (environment.production) {
    enableProdMode();
}

function appInit(appInitService: AppInitService): any {
    return () => appInitService.init();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            AppRoutingModule,
            TranslocoRootModule,
            BrowserAnimationsModule,
        ),
        {
            provide: APP_INITIALIZER,
            useFactory: appInit,
            deps: [AppInitService],
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ],
});
