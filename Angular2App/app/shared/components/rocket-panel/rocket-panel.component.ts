import { Component, Input } from '@angular/core';
import { RocketPanel } from './Panel.model';

@Component({
    moduleId: module.id,
    selector: 'rocket-panel',
    templateUrl: './rocket-panel.component.html',
    styleUrls: ['./rocket-panel.component.css']
})

export class RocketPanelComponent {
     @Input() rocketPanel: RocketPanel;
     constructor() {}
}
