import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

export interface TableColumn {
    label: string;
    fieldName: string;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class TableComponent implements OnInit {
    @Input() data: any[] = [];
    @Input({ required: true }) tableColumns: TableColumn[] = [];

    constructor() {}

    ngOnInit(): void {}
}
