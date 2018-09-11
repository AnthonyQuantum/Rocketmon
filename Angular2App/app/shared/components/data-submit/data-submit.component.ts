import { Component } from '@angular/core';
import { DataAnalysisComponent } from '../data/data.component';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'data-submit',
    templateUrl: './data-submit.component.html',
    styleUrls: ['./data-submit.component.css']
})

export class DataSubmitComponent {
    public static setStyleAttribute(element: HTMLElement, attrs: { [key: string]: Object }): void {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach((key: string) => {
                element.style[key] = attrs[key];
            });
        }
    }
    word: string;
    constructor(private cookiesService: CookiesService) {
        if (cookiesService.getCookie("lang") == "us") {
            this.word = "Multi-purpose meteorological rocket";
        }
        if (cookiesService.getCookie("lang") == "ru") {
            this.word = decodeURIComponent('%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0');
        }
    }
}
