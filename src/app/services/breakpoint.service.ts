import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

export const tailwindBreakpoints = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
};

@Injectable({ providedIn: 'root' })
export class BreakpointService {
    private readonly breakpointObserver = inject(BreakpointObserver);

    isSm$$ = signal<boolean>(false);
    isMd$$ = signal<boolean>(false);
    isLg$$ = signal<boolean>(false);
    isXl$$ = signal<boolean>(false);
    is2xl$$ = signal<boolean>(false);
    isLandscapeOrientation$$ = signal<boolean>(false);
    isPortraitOrientation$$ = signal<boolean>(false);

    constructor() {
        this.observeBreakpoints();
    }

    private observeBreakpoints(): void {
        this.breakpointObserver
            .observe([
                tailwindBreakpoints.sm,
                tailwindBreakpoints.md,
                tailwindBreakpoints.lg,
                tailwindBreakpoints.xl,
                tailwindBreakpoints['2xl'],
                '(orientation: landscape)',
                '(orientation: portrait)',
            ])
            .subscribe((breakpointsState) => {
                const matches = breakpointsState.breakpoints;

                this.isSm$$.set(matches[tailwindBreakpoints.sm]);
                this.isMd$$.set(matches[tailwindBreakpoints.md]);
                this.isLg$$.set(matches[tailwindBreakpoints.lg]);
                this.isXl$$.set(matches[tailwindBreakpoints.xl]);
                this.is2xl$$.set(matches[tailwindBreakpoints['2xl']]);
                this.isLandscapeOrientation$$.set(
                    matches['(orientation: landscape)'],
                );
                this.isPortraitOrientation$$.set(
                    matches['(orientation: portrait)'],
                );
            });
    }
}
