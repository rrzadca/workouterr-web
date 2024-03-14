import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    signal,
    computed,
    effect,
    Input,
    TemplateRef,
    inject,
} from '@angular/core';
import { TransitionDirective } from '../../../../directives/transition.directive';
import { ButtonComponent } from '../../../../components/button/button.component';
import { BreakpointService } from '../../../../services/breakpoint.service';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, TransitionDirective, ButtonComponent],
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class AppLayoutComponent implements OnInit {
    private readonly breakpointService = inject(BreakpointService);

    protected isOverlayVisible$$ = signal<boolean>(false);
    protected showSidebar$$ = signal<boolean>(true);
    protected isSidebarOpened$$ = computed<boolean>(() => {
        return this.showSidebar$$() || this.breakpointService.isLg$$();
    });

    @Input() sidebarTemplate: TemplateRef<void> | null = null;
    @Input() topbarTemplate: TemplateRef<void> | null = null;
    @Input() footerTemplate: TemplateRef<void> | null = null;

    constructor() {
        /*effect(() => {
            this.isOverlayVisible$$.set(
                this.isSidebarOpened$$() ? true : this.isOverlayVisible$$(),
            );
        });*/
    }

    ngOnInit(): void {}

    protected hideOverlay(): void {
        this.isOverlayVisible$$.set(false);
    }

    protected toggleSidebar(): void {
        this.showSidebar$$.set(!this.showSidebar$$());
    }

    protected readonly environment = environment;
}
