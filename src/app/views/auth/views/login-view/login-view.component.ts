import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputTextComponent } from '../../../../components/inputs/input-text/input-text.component';

@Component({
    selector: 'rr-login-view',
    templateUrl: 'login-view.component.html',
    styleUrls: ['login-view.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonComponent,
        InputTextComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginViewComponent {
    form: FormGroup;
    constructor(
        private authService: AuthService,
        private router: Router,
        private readonly formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]],
        });
    }

    onLogin(): void {
        if (this.form.valid) {
            this.authService.login();
            this.router.navigateByUrl('/app');
        }
        this.form.markAllAsTouched();
    }
}
