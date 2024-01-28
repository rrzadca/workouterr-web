import { DestroyRef, inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
    private readonly breakpointObserver = inject(BreakpointObserver);

    constructor() {}

    private observeBreakpoints(): void {
        this.breakpointObserver
            .observe(['(min-width: 768px)'])
            .subscribe((breakpointState) => {
                console.log(` ;; breakpointState`, breakpointState);
            });
    }
}
