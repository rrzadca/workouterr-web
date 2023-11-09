import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rr-form-input-error',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form-input-error.component.html',
    styleUrls: ['./form-input-error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputErrorComponent {
    @Input() error: string | undefined;
}
