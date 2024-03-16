import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSize = 'sm' | 'md' | 'default' | 'xl' | '2xl';
export type ButtonVariant = 'primary' | 'secondary';

@Component({
    selector: 'rr-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnChanges {
    @Input() size: ButtonSize = 'default';
    @Input() variant: ButtonVariant = 'primary';
    @Input() fullWidth = false;

    private readonly cssClassesArr: string[] = [];

    get cssClasses(): string {
        return this.cssClassesArr.join(' ');
    }

    ngOnInit(): void {
        this.addCssClasses();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.addCssClasses();
    }

    addCssClasses(): void {
        this.cssClassesArr.push(
            'shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200',
        );
        if (this.fullWidth) {
            this.cssClassesArr.push('w-full');
        }
        this.addSizeCssClasses();
        this.addVariantsCssClasses();
    }

    addSizeCssClasses(): void {
        switch (this.size) {
            case 'sm':
                this.cssClassesArr.push('rounded px-2 py-1 text-xs');
                break;
            case 'md':
                this.cssClassesArr.push('rounded px-2 py-1 text-sm');
                break;
            case 'default':
                this.cssClassesArr.push('rounded-md px-2.5 py-1.5 text-sm');
                break;
            case 'xl':
                this.cssClassesArr.push('rounded-md px-3 py-2 text-sm');
                break;
            case '2xl':
                this.cssClassesArr.push('rounded-md px-3.5 py-2.5 text-sm');
                break;
            default:
                break;
        }
    }

    addVariantsCssClasses(): void {
        switch (this.variant) {
            case 'primary':
                this.cssClassesArr.push(
                    'text-white bg-primary-700 hover:bg-primary-600 focus-visible:outline-primary-700 dark:text-black dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus-visible:outline-primary-700',
                );
                break;
            case 'secondary':
                this.cssClassesArr.push(
                    'bg-secondary-800 dark:bg-secondary-200 text-secondary-200 dark:text-secondary-800 hover:bg-secondary-600 dark:hover:bg-secondary-400 focus-visible:outline-secondary-800 dark:focus-visible:outline-secondary-200',
                );
                break;
            default:
                break;
        }
    }
}
