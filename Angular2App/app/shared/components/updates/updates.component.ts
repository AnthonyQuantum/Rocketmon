import { Component, Input } from '@angular/core';
import { Panel } from '../updates-panel/Panel.model';

@Component({
    moduleId: module.id,
    selector: 'updates',
    templateUrl: './updates.component.html',
    styleUrls: ['./updates.component.css']
})

export class UpdatesComponent {
    @Input() panel: Panel;
    panels: Panel[];
    constructor() {
        this.panels = [
            new Panel("Successful_5th_official_launch", 'app/../img/updates/1.png', 'Successful 5th official launch'),
            new Panel("Canary_WIP", 'app/../img/updates/Canary.png', 'Canary WIP')
        ];
    }
}
