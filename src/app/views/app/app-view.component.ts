import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'rr-app-view',
    templateUrl: 'app-view.component.html',
    styleUrls: ['app-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
})
export class AppViewComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    onLogout(): void {
        this.authService.logout();
    }
}
