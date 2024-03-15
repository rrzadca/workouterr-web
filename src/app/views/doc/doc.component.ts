import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { InputTextComponent } from '@components/form/inputs/input-text/input-text.component';
@Component({
    selector: 'app-doc',
    standalone: true,
    imports: [CommonModule, ButtonComponent, InputTextComponent, FormsModule],
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
})
export class DocComponent {
    textInput = '';
}
