"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cookies_service_1 = require("../../services/cookies.service");
var LanguageComponent = (function () {
    function LanguageComponent(cookiesService) {
        this.cookiesService = cookiesService;
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
    LanguageComponent.prototype.writeCookie = function (name, value) {
        var date, expires;
        expires = "; expires=2147483647";
        document.cookie = name + "=" + value + expires + "; path=/";
    };
    LanguageComponent.prototype.toggleLang = function (event) {
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
    };
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'language',
        templateUrl: './language.component.html',
        styleUrls: ['./language.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], LanguageComponent);
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=language.component.js.map