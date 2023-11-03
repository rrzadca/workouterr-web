import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSize = 'sm' | 'md' | 'l' | 'xl' | '2xl';
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
    @Input() size: ButtonSize = 'l';
    @Input() variant: ButtonVariant = 'primary';

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
            'shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200',
        );
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
            case 'l':
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
                    'text-white bg-teal-600 hover:bg-teal-700 focus-visible:outline-teal-600 dark:text-black dark:bg-teal-200 dark:hover:bg-teal-400 dark:focus-visible:outline-teal-200',
                );
                break;
            case 'secondary':
                this.cssClassesArr.push(
                    'bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 hover:bg-neutral-600 dark:hover:bg-neutral-400 focus-visible:outline-neutral-800 dark:focus-visible:outline-neutral-200',
                );
                break;
            default:
                break;
        }
    }
}
