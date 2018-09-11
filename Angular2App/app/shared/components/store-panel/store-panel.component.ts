import { Component, Input } from '@angular/core';
import { Panel } from './Panel.model';
import { CookiesService } from '../../services/cookies.service';


@Component({
    moduleId: module.id,
    selector: 'store-panel',
    templateUrl: './store-panel.component.html',
    styleUrls: ['./store-panel.component.css']
})

export class StorePanelComponent {
     @Input() panel: Panel;
     word: string;
     constructor(private cookiesService: CookiesService) {
         if (cookiesService.getCookie("lang") == "us") {
             this.word = "Buy";
         }
         else {
             this.word = decodeURIComponent('%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C');
         }
     }
}
