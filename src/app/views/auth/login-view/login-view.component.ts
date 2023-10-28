import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
    selector: 'rr-login-view',
    templateUrl: 'login-view.component.html',
    styleUrls: ['login-view.component.scss'],
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginViewComponent {}
