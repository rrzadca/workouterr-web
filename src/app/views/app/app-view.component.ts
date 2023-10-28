import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rr-app-view',
    templateUrl: 'app-view.component.html',
    styleUrls: ['app-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
})
export class AppViewComponent {}
