import { Component, Input, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { BaseValueAccessor } from '@core/base-value-accessor';

@Component({
    selector: 'rr-input-text',
    templateUrl: './input-text.component.html',
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    standalone: true,
    imports: [CommonModule, TranslocoModule],
})
export class InputTextComponent extends BaseValueAccessor<string> {
    @Input() type: 'email' | 'password' | 'text' = 'text';
    @Input() label: string | undefined;
    @Input() id: string | undefined;
    @Input() placeholder: string = '';

    constructor(@Self() public override ngControl: NgControl) {
        super(ngControl);
    }

    onValueChange(value: string | null): void {
        this.value = value;
    }
}
