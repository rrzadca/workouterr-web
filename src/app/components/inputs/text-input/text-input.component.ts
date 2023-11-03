import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'rr-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class TextInputComponent implements ControlValueAccessor {
    isDisabled = false;
    private innerValue: string | null = null;

    @Input() type: 'email' | 'password' | 'text' = 'text';
    @Input() label: string | undefined;
    @Input() id: string | undefined;
    @Input() placeholder: string = '';

    constructor(protected ngControl: NgControl) {
        if (ngControl) {
            ngControl.valueAccessor = this;
        } else {
            throw new Error(`ngControl not found`);
        }
    }

    onValueChangeEvent: (value: string | null) => void = () => {};

    onTouchEvent: () => void = () => {};

    registerOnChange(onChangeFn: (value: string | null) => void): void {
        this.onValueChangeEvent = onChangeFn;
    }

    registerOnTouched(onTouchFn: () => void): void {
        this.onTouchEvent = onTouchFn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    writeValue(value: string | null): void {
        this.value = value;
    }

    get value(): string | null {
        return this.innerValue;
    }

    set value(value: string | null) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onValueChangeEvent(value);
            this.onTouchEvent();
        }
    }

    onValueChange(value: string | null): void {
        this.value = value;
    }

    get isValid(): boolean {
        return !!this.ngControl.valid && !!this.ngControl.touched;
    }

    get errorMessages(): string[] | null {
        const controlErrors = this.ngControl.errors;

        if (!controlErrors) {
            return null;
        }

        const errors = Object.keys(controlErrors);
        if (!errors || errors.length === 0) {
            return null;
        }

        return errors.map((error) => `errors.${error}`);
    }
}
