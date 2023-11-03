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
            'bg-teal-200 font-semibold text-black shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200',
        );

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
}
