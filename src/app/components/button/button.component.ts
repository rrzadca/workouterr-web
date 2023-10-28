import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSize = 'sm' | 'md' | 'default' | 'lg' | 'xl';

@Component({
    selector: 'rr-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges, OnInit {
    private cssClasses: string[] = [];
    @Input() size: ButtonSize = 'default';

    ngOnInit(): void {
        this.setCssClasses();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (
            changes?.['size']?.previousValue !== changes?.['size']?.currentValue
        ) {
            this.setCssClasses();
        }
    }

    get cssClass(): string {
        return this.cssClasses.join(' ');
    }

    private setCssClasses(): void {
        this.cssClasses = [
            'font-semibold bg-lime-600 text-white shadow-sm  hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600',
        ];

        switch (this.size) {
            case 'sm':
                this.cssClasses.push('rounded px-2 py-1 text-xs');
                break;
            case 'md':
                this.cssClasses.push('rounded px-2 py-1 text-sm');
                break;
            case 'default':
                this.cssClasses.push('rounded-md px-2.5 py-1.5 text-sm');
                break;
            case 'lg':
                this.cssClasses.push('rounded-md px-3 py-2 text-sm');
                break;
            case 'xl':
                this.cssClasses.push('rounded-md px-3.5 py-2.5 text-sm');
                break;
        }
    }
}
