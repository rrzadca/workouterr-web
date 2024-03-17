import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from '@components/table/components/table/table.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableColumn } from '@components/table/models/table-column.model';
import { Exercise } from '@app/api';

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
    imports: [CommonModule, RouterOutlet, TableComponent, ButtonComponent],
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

    protected data: Exercise[] = [
        {
            id: '1',
            name: 'Bench Press',
            description: 'Lay on your back and press a barbell',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '2',
            name: 'Squat',
            description: 'Stand with a barbell on your back and squat',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '3',
            name: 'Deadlift',
            description: 'Lift a barbell off the ground',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '4',
            name: 'Pull-up',
            description: 'Pull yourself up to a bar',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '5',
            name: 'Push-up',
            description: 'Lower and raise your body using your arms',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '6',
            name: 'Overhead Press',
            description: 'Press a barbell overhead',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '7',
            name: 'Barbell Row',
            description: 'Row a barbell to your chest',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '8',
            name: 'Dumbbell Curl',
            description: 'Curl a dumbbell with your arm',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '9',
            name: 'Tricep Extension',
            description: 'Extend a barbell with your arm',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
        {
            id: '10',
            name: 'Leg Press',
            description: 'Press a weighted platform with your legs',
            createdOn: '2021-08-01T00:00:00Z',
            updatedOn: '2021-08-01T00:00:00Z',
        },
    ];
}
