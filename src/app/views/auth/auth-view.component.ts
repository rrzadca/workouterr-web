import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth-view',
    templateUrl: './auth-view.component.html',
    styleUrls: ['./auth-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterOutlet],
})
export class AuthViewComponent {}
