import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'startertemplatefooter',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {
    word: string;
    constructor(private cookiesService: CookiesService) {
        cookiesService.getCookie("lang") == "us" ?
            this.word = "Follow us" :
            this.word = decodeURIComponent('%D0%9D%D0%B0%D0%B9%D1%82%D0%B8%20%D0%BD%D0%B0%D1%81');
    }
}
