import { Component, Input } from '@angular/core';
import { Panel } from './Panel.model';

@Component({
    moduleId: module.id,
    selector: 'menu-panel',
    templateUrl: './menu-panel.component.html',
    styleUrls: ['./menu-panel.component.css']
})

export class MenuPanelComponent {
     @Input() panel: Panel;
     constructor() {}
}
