import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-training-plans-view',
    templateUrl: './training-plans-view.component.html',
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
export class TrainingPlansViewComponent
implements OnInit
{


    constructor() {
    }

    ngOnInit(): void {
    }

}
