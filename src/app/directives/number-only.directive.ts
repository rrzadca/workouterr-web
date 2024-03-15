import {
    Directive,
    ElementRef,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import { LanguageService } from '@services/language.service';

@Directive({
    selector: '[rrNumbersOnly]',
    standalone: true,
})
export class NumberOnlyDirective {
    private readonly languageService = inject(LanguageService);
    private readonly elementRef = inject(ElementRef);

    private nativeElement: HTMLElement = this.elementRef.nativeElement;

    @Input() rrNumbersOnly: string | null = null;

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        // allow special keys
        const allowedKeys = ['Backspace', 'Tab', 'Escape', 'Enter', 'Delete'];
        const allowedKeysWithCtrl = ['a', 'A', 'c', 'C', 'v', 'V', 'x', 'X'];
        if (
            allowedKeys.includes(event.key) ||
            (allowedKeysWithCtrl.includes(event.key) && event.ctrlKey === true)
        ) {
            return;
        }

        // allow local decimal separator only and only once
        if (
            (this.languageService.getNumberSeparators().decimal === ',' &&
                event.key === ',' &&
                this.rrNumbersOnly?.indexOf(',') === -1) ||
            (this.languageService.getNumberSeparators().decimal === '.' &&
                event.key === '.' &&
                this.rrNumbersOnly?.indexOf('.') === -1)
        ) {
            return;
        }

        if (/^[0-9]*$/.test(event.key)) {
            return;
        }

        event.preventDefault();
    }
}
