import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/button/button.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rr-login-view',
    templateUrl: 'login-view.component.html',
    styleUrls: ['login-view.component.scss'],
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginViewComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    login(): void {
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('/app');
    }
}
