import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CurrentUserService } from '../../services/current-user.service';

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
    private readonly currentUserService = inject(CurrentUserService);

    protected currentUser$$ = this.currentUserService.currentUser$$;

    constructor() {}

    ngOnInit(): void {}

    logout(): void {
        this.authService.logout();
    }
}
