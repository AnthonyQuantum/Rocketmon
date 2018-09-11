import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'button-standard',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent {
@Input() inText: string;
}
