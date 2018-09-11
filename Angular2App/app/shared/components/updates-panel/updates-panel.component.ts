import { Component, Input } from '@angular/core';
import { Panel } from './Panel.model';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'updates-panel',
    templateUrl: './updates-panel.component.html',
    styleUrls: ['./updates-panel.component.css']
})

export class UpdatesPanelComponent {
     @Input() panel: Panel;
     word: string;
     constructor(private cookiesService: CookiesService) {
         cookiesService.getCookie("lang") == "us" ?
             this.word = "Read more" :
             this.word = decodeURIComponent('%D0%9F%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5');
     }
}
