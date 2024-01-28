import {
    Directive,
    effect,
    ElementRef,
    Input,
    OnInit,
    signal,
} from '@angular/core';

@Directive({
    selector: '[rrTransition]',
    standalone: true,
})
export class TransitionDirective implements OnInit {
    @Input() rrTransitionEntering = '';
    @Input() rrTransitionEnteringFrom = '';
    @Input() rrTransitionEnteringTo = '';
    @Input() rrTransitionLeaving = '';
    @Input() rrTransitionLeavingFrom = '';
    @Input() rrTransitionLeavingTo = '';

    @Input() set rrTransition(value: boolean) {
        if (this.isVisible$$() === value || !this.element) {
            return;
        }

        this.isVisible$$.set(value);
    }

    private isVisible$$ = signal<boolean>(false);

    constructor(private elementRef: ElementRef) {
        effect(() => {
            if (this.isVisible$$()) {
                // this.removeClasses('hidden');
                this.addClasses(this.rrTransitionEntering);
                this.addClasses(this.rrTransitionEnteringFrom);

                requestAnimationFrame(() => {
                    this.removeClasses(this.rrTransitionEnteringFrom);
                    this.addClasses(this.rrTransitionEnteringTo);
                });
            } else {
                this.removeClasses(this.rrTransitionEntering);
                this.removeClasses(this.rrTransitionEnteringTo);
                this.addClasses(this.rrTransitionLeaving);
                this.addClasses(this.rrTransitionLeavingFrom);

                requestAnimationFrame(() => {
                    this.removeClasses(this.rrTransitionLeavingFrom);
                    this.addClasses(this.rrTransitionLeavingTo);
                });
            }
        });
    }

    ngOnInit() {}

    get element(): HTMLElement | null {
        return this.elementRef?.nativeElement ?? null;
    }

    private addClasses(classes: string): void {
        if (!this.element) {
            return;
        }
        this.element.classList.add(...classes.split(' '));
    }

    private removeClasses(classes: string): void {
        if (!this.element) {
            return;
        }
        this.element.classList.remove(...classes.split(' '));
    }
}
