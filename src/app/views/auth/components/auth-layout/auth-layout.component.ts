import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'rr-auth-layout',
    templateUrl: './auth-layout.component.html',
    styleUrls: ['./auth-layout.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
