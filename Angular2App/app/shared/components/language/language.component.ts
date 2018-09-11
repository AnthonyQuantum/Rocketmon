import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
    moduleId: module.id,
    selector: 'language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.css']
})

export class LanguageComponent {
    writeCookie(name: string, value: string) {
    var date, expires;
    expires = "; expires=2147483647";
    document.cookie = name + "=" + value + expires + "; path=/";
    }

    imgSrc: string;
    word: string;
    currentLang: string;
    constructor(private cookiesService: CookiesService) {
        this.currentLang = cookiesService.getCookie("lang");
        if (this.currentLang == 'us') {
            this.imgSrc = "../../../../Content/flags/us.png";
            this.word = 'Language:';
        }
        else if (this.currentLang == 'ru') {
            this.imgSrc = "../../../../Content/flags/ru.png";
            this.word = decodeURIComponent('%D0%AF%D0%B7%D1%8B%D0%BA:');
        }

    }
    toggleLang(event: any) {
        if (this.currentLang == 'us') {
            this.currentLang = 'ru';
            this.writeCookie("lang", "ru");
            this.imgSrc = "../../../../Content/flags/ru.png";
            this.word = decodeURIComponent('%D0%AF%D0%B7%D1%8B%D0%BA:');
        }
        else if (this.currentLang == 'ru') {
            this.currentLang = 'us';
            this.writeCookie("lang", "us");
            this.imgSrc = "../../../../Content/flags/us.png";
            this.word = 'Language:';
        }
    }
}
