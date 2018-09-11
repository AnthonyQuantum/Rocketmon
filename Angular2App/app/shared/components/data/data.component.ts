import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HomeComponent } from '../home/home.component';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})

export class DataAnalysisComponent {
    public values: any[];
    name1: string;
    name2: string;
    constructor(private cookiesService: CookiesService)
    {
        if (cookiesService.getCookie("lang") == "us") {
            this.name1 = "Points";
            this.name2 = "Users";
        }
        if (cookiesService.getCookie("lang") == "ru") {
            this.name1 = decodeURIComponent('%D0%A2%D0%BE%D1%87%D0%BA%D0%B8');
            this.name2 = decodeURIComponent('%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8');
        }
    }
}
