import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    HostBinding,
    OnInit,
    Self,
} from '@angular/core';
import { BaseValueAccessor } from '@core/base-value-accessor';
import { NgControl } from '@angular/forms';
import { TranslocoDirective } from '@ngneat/transloco';
import { NumberOnlyDirective } from '@app/directives/number-only.directive';

@Component({
    selector: 'rr-input-number',
    templateUrl: './input-number.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, TranslocoDirective, NumberOnlyDirective],
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class InputNumberComponent
    extends BaseValueAccessor<number>
    implements OnInit
{
    protected enteredValue: string | null = null;

    @Input() fieldId: string | null = null;
    @Input() placeholder: number | string | undefined;
    @Input() readonly = false;
    @Input() prefix: string | null = null;
    @Input() postfix: string | null = null;
    @Input() showErrorIcon = true;

    constructor(@Self() public override ngControl: NgControl) {
        super(ngControl);
    }

    ngOnInit(): void {}
}
