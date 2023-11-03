import { Component, Input, Self } from '@angular/core';
import { BaseValueAccessor } from '../base-value-accessor';
import { CommonModule } from '@angular/common';
import { NgControl } from '@angular/forms';

@Component({
    selector: 'rr-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    standalone: true,
    imports: [CommonModule],
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
