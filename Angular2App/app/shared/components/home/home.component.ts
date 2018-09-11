import { Component, Input } from '@angular/core';
import { Panel } from '../menu-panel/Panel.model';
import { ButtonComponent } from '../button/button.component';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input() panel: Panel;
    panels: Panel[];
    language: string;
    public static setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach((key: string) => {
                element.style[key] = attrs[key];
            });
        }
    }

    word1: string;
    word2: string;
    word3: string;
    buttonWord: string;
    popup: boolean;

    constructor(private cookiesService: CookiesService) {
        this.popup = false;
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Rockets";
            this.word2 = "Data";
            this.word3 = "Future plans";
            this.buttonWord = "Join us!"
        }
        else {
            this.word1 = decodeURIComponent('%D0%A0%D0%B0%D0%BA%D0%B5%D1%82%D1%8B');
            this.word2 = decodeURIComponent('%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85');
            this.word3 = decodeURIComponent('%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8');
            this.buttonWord = decodeURIComponent('%D0%9F%D1%80%D0%B8%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F!');
        }
        this.panels = [
            new Panel(this.word1, 'app/../img/rocket.png', '/main/rockets'),
            new Panel(this.word2, 'app/../img/data.png', '/main/data'),
            new Panel(this.word3, 'app/../img/plans.png', '/main/plans')
        ];
    }
}
