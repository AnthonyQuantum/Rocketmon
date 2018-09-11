import { Component } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'startertemplatenavigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    word1: string;
    word2: string;


    constructor(private cookiesService: CookiesService) {
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Store";
            this.word2 = "Updates";
        }
        else {
            this.word1 = decodeURIComponent('%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD');
            this.word2 = decodeURIComponent('%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8');
        }
    }
}
