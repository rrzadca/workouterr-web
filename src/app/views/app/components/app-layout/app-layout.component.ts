import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    signal,
    computed,
    effect,
} from '@angular/core';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class AppLayoutComponent implements OnInit {
    protected isOverlayVisible$$ = signal<boolean>(false);
    protected showSidebar$$ = signal<boolean>(true);
    protected isSidebarOpened$$ = computed<boolean>(() => {
        // isMd || toggle flag for button
        return this.showSidebar$$();
    });

    constructor() {
        effect(() => {
            this.isOverlayVisible$$.set(
                this.isSidebarOpened$$() ? true : this.isOverlayVisible$$(),
            );
        });
    }

    ngOnInit(): void {}

    hideOverlay(): void {
        this.isOverlayVisible$$.set(false);
    }
}
