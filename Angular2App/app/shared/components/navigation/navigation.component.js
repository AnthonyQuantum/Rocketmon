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
var NavigationComponent = (function () {
    function NavigationComponent(cookiesService) {
        this.cookiesService = cookiesService;
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Store";
            this.word2 = "Updates";
        }
        else {
            this.word1 = decodeURIComponent('%D0%9C%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD');
            this.word2 = decodeURIComponent('%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8');
        }
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'startertemplatenavigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map