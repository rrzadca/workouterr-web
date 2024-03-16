import { Component, computed, Input, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppIconName, AppIcons } from '@components/icon/icons/app-icons-lib';
import { SafeHtmlPipe } from '@app/pipes/safe-html/safe-html.pipe';

export type IconSize =
    | 'sm'
    | 'md'
    | 'default'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

@Component({
    selector: 'rr-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.scss'],
    standalone: true,
    imports: [CommonModule, SafeHtmlPipe],
})
export class SvgIconComponent {
    protected clickable$$ = signal<boolean>(false);
    protected size$$ = signal<IconSize>('default');

    protected cssClasses$$ = computed(() => {
        return this.getIconClasses(this.clickable$$(), this.size$$());
    });

    @Input({ required: true }) name: AppIconName = 'faHouse';
    @Input() customHeight: string | null = null;

    @Input() set size(value: IconSize) {
        this.size$$.set(value);
    }
    @Input() set clickable(value: boolean) {
        this.clickable$$.set(value);
    }

    getAppIcon(iconName: AppIconName): string | null {
        let icon = null;

        icon = (AppIcons as Record<string, string>)[iconName];

        if (!icon) {
            console.log(
                `%c ;;  SvgIconComponent :: icon ${iconName} not found`,
                'background:red; color: #eee; padding:2px 20px;',
            );
            return null;
        }

        return icon;
    }

    private getIconClasses(clickable: boolean, size: IconSize): string {
        const c: string[] = [];
        if (clickable) {
            c.push('cursor-pointer hover:opacity-50');
        }

        switch (size) {
            case 'sm':
                c.push('w-2 h-2');
                break;
            case 'md':
                c.push('w-3 h-3');
                break;
            case 'default':
                c.push('w-4 h-4');
                break;
            case 'xl':
                c.push('w-5 h-5');
                break;
            case '2xl':
                c.push('w-6 h-6');
                break;
            case '3xl':
                c.push('w-7 h-7');
                break;
            case '4xl':
                c.push('w-8 h-8');
                break;
            case '5xl':
                c.push('w-9 h-9');
                break;
            case '6xl':
                c.push('w-10 h-10');
                break;
        }

        return c.join(' ');
    }
}
