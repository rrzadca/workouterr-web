import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'rr-app-view',
    templateUrl: 'app-view.component.html',
    styleUrls: ['app-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, ButtonComponent, RouterOutlet],
})
export class AppViewComponent implements OnInit {
    private readonly authService = inject(AuthService);

    protected currentUser$$ = signal(this.authService.state.currentUser);
    protected showMobileSidebar$$ = signal<boolean>(false);
    protected isSidebarVisible$$ = signal<boolean>(true);

    constructor() {}

    ngOnInit(): void {}

    logout(): void {
        this.authService.logout();
    }

    closeSidebar() {
        this.isSidebarVisible$$.set(false);
    }
}
