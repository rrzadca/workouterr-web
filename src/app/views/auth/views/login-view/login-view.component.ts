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
import { InputTextComponent } from '../../../../components/form/inputs/input-text/input-text.component';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { TranslocoModule } from '@ngneat/transloco';
import { confirmPasswordValidator } from '../../../../validators/confirm-password.validator';
import { FormInputErrorComponent } from '../../../../components/form/form-input-error/form-input-error.component';

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
        AuthLayoutComponent,
        TranslocoModule,
        FormInputErrorComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginViewComponent {
    formGroup: FormGroup;
    constructor(
        private authService: AuthService,
        private router: Router,
        private readonly formBuilder: FormBuilder,
    ) {
        this.formGroup = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]],
        });
    }

    onLogin(): void {
        if (this.formGroup.valid) {
            this.authService.login(
                this.formGroup.value.email,
                this.formGroup.value.password,
            );
            this.router.navigateByUrl('/app');
        }
        this.formGroup.markAllAsTouched();
    }
}
