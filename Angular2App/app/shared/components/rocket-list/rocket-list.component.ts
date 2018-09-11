import { Component, Input } from '@angular/core';
import { RocketPanel } from '../rocket-panel/Panel.model';
import { RocketPanelComponent } from '../rocket-panel/rocket-panel.component';
import { HomeComponent } from '../home/home.component';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'rocket-list',
    templateUrl: './rocket-list.component.html',
    styleUrls: ['./rocket-list.component.css']
})

export class RocketListComponent {
@Input() rocketPanel: RocketPanel; 
rocketPanels: RocketPanel[];
word: string;
    constructor(private cookiesService: CookiesService)
    {
        if (cookiesService.getCookie("lang") == "us") {
            this.word = "Multi-purpose meteorological rocket";
        }
        else
        {
            this.word = decodeURIComponent('%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0');
        }
            
        this.rocketPanels = [ 
            new RocketPanel('Sparrow', '2.0.0', '1S, 9U, RS, v1 motor', 'app/../img/Spr.png'),
            new RocketPanel('Canary', '1.0.0', '1S, 12U, RS, v1 motor', 'app/../img/Cnr.png')
        ];
    }
}
