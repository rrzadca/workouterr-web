import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    HostBinding,
    OnInit,
} from '@angular/core';
import { SvgIconComponent } from '@components/icon/components/svg-icon/svg-icon.component';
import { TableRowOption } from '@components/table/models/table-row-option.model';
import { TableColumn } from '@components/table/models/table-column.model';

@Component({
    selector: 'rr-table-row',
    templateUrl: './table-row.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, SvgIconComponent],
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class TableRowComponent implements OnInit {
    @Input() tableColumns: TableColumn[] = [];
    @Input() rowOptions: TableRowOption[] = [];
    @Input({ required: true }) data: any | null = null;

    constructor() {}

    ngOnInit(): void {}
}
