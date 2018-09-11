import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'quick-overview',
    templateUrl: './quick-overview.component.html',
    styleUrls: ['./quick-overview.component.css']
})

export class QuickOverviewComponent {
    word: string;
    getCookie(cname: string) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    constructor() {    
        if (this.getCookie("lang") == "us")
        {
            this.word = "Atmosphere monitoring system powered by rockets";
        }
        else
        {
            this.word = decodeURIComponent('%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BC%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3%D0%B0%20%D0%B0%D1%82%D0%BC%D0%BE%D1%81%D1%84%D0%B5%D1%80%D1%8B%20%D0%BF%D1%80%D0%B8%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8%20%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82');
        }
    }
}
