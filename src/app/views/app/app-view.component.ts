import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { UsersApiService } from '../../api/users/users-api.service';
import { User } from '../../api/users/user.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'rr-app-view',
    templateUrl: 'app-view.component.html',
    styleUrls: ['app-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ButtonComponent, RouterOutlet],
})
export class AppViewComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);

    users: User[] = [];

    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersApiService,
    ) {}

    ngOnInit(): void {
        this.usersService
            .findAll()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((response) => {
                console.log(` ;; response`, response);
            });
    }

    onLogout(): void {
        this.authService.logout();
    }
}
