import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-trainings-view',
    templateUrl: './trainings-view.component.html',
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsViewComponent
implements OnInit
{


    constructor() {
    }

    ngOnInit(): void {
    }

}
