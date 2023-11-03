import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { UsersApiService } from '../../../../api/users/users-api.service';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputTextComponent } from '../../../../components/inputs/input-text/input-text.component';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';

@Component({
    selector: 'rr-create-account-view',
    templateUrl: './create-account-view.component.html',
    styleUrls: ['./create-account-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonComponent,
        InputTextComponent,
        AuthLayoutComponent,
        RouterLink,
    ],
})
export class CreateAccountViewComponent {
    private readonly destroyRef = inject(DestroyRef);
    form: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly usersService: UsersApiService,
        private readonly router: Router,
    ) {
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.usersService
                .create(this.form.value)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((res) => {
                    this.router.navigateByUrl('/login');
                });
        }

        this.form.markAllAsTouched();
    }
}
