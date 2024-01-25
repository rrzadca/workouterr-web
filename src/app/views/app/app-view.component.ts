import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { UsersApiService } from '../../api-old/users/users-api.service';
import { User } from '../../api-old/users/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
    private readonly destroyRef = inject(DestroyRef);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    users: User[] = [];
    currentUser: User | undefined;

    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersApiService,
    ) {}

    ngOnInit(): void {
        this.usersService
            .findAll()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((response) => {
                this.currentUser = response[0];
                console.log(` ;; this.currentUser`, this.currentUser);
                this.changeDetectorRef.detectChanges();
            });
    }

    logout(): void {
        this.authService.logout();
    }
}
