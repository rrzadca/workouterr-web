import { CanActivateFn, CanMatchFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PublicGuard {
    isAuthenticated = ():
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> => {
        return true;
    };

    canActivate: CanActivateFn = this.isAuthenticated;
    canMatch: CanMatchFn = this.isAuthenticated;
}
