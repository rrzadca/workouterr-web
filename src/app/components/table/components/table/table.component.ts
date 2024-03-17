import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { SvgIconComponent } from '@components/icon/components/svg-icon/svg-icon.component';
import { TableColumn } from '../../models/table-column.model';
import { TableRowOption } from '../../models/table-row-option.model';
import { TableRowComponent } from '@components/table/components/table-row/table-row.component';

@Component({
    selector: 'rr-table',
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, SvgIconComponent, TableRowComponent],
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
    @Input() rowOptions: TableRowOption[] = [];

    constructor() {}

    ngOnInit(): void {}
}
