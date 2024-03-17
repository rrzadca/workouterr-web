import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { InputTextComponent } from '@components/form/inputs/input-text/input-text.component';
import { SvgIconComponent } from '@components/icon/components/svg-icon/svg-icon.component';
import { AppIconName, AppIcons } from '@components/icon/icons/app-icons-lib';
@Component({
    selector: 'app-doc',
    standalone: true,
    imports: [
        CommonModule,
        ButtonComponent,
        InputTextComponent,
        FormsModule,
        SvgIconComponent,
    ],
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
    protected textInput: string = '';
    protected iconNames: AppIconName[] = Object.keys(AppIcons) as AppIconName[];
}
