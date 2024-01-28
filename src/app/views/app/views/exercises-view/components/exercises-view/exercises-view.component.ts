import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
    TableColumn,
    TableComponent,
} from '../../../../../../components/table/table.component';
import { Exercise } from '../../../../../../api';
import { ButtonComponent } from '../../../../../../components/button/button.component';
import { TestDialogComponent } from '../../../../../../components/test-dialog/test-dialog.component';

@Component({
    selector: 'app-exercises-view',
    templateUrl: './exercises-view.component.html',
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        TableComponent,
        ButtonComponent,
        TestDialogComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesViewComponent implements OnInit {
    protected tableColumns: TableColumn[] = [
        {
            label: 'Name',
            fieldName: 'name',
        },
        {
            label: 'Description',
            fieldName: 'description',
        },
    ];

    constructor() {}

    ngOnInit(): void {}

    protected data: Exercise[] = [];
}
