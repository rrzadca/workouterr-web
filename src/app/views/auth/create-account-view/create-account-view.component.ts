import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { UsersApiService } from '../../../api/users/users-api.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create-account-view',
    templateUrl: './create-account-view.component.html',
    styleUrls: ['./create-account-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule],
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
                    console.log(` ;; res`, res);
                    this.router.navigateByUrl('/login');
                });
        }

        this.form.markAllAsTouched();
    }
}
