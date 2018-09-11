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
var Panel_model_1 = require("../menu-panel/Panel.model");
var cookies_service_1 = require("../../services/cookies.service");
var HomeComponent = (function () {
    function HomeComponent(cookiesService) {
        this.cookiesService = cookiesService;
        this.popup = false;
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Rockets";
            this.word2 = "Data";
            this.word3 = "Future plans";
            this.buttonWord = "Join us!";
        }
        else {
            this.word1 = decodeURIComponent('%D0%A0%D0%B0%D0%BA%D0%B5%D1%82%D1%8B');
            this.word2 = decodeURIComponent('%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85');
            this.word3 = decodeURIComponent('%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8');
            this.buttonWord = decodeURIComponent('%D0%9F%D1%80%D0%B8%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F!');
        }
        this.panels = [
            new Panel_model_1.Panel(this.word1, 'app/../img/rocket.png', '/main/rockets'),
            new Panel_model_1.Panel(this.word2, 'app/../img/data.png', '/main/data'),
            new Panel_model_1.Panel(this.word3, 'app/../img/plans.png', '/main/plans')
        ];
    }
    HomeComponent.setStyleAttribute = function (element, attrs) {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach(function (key) {
                element.style[key] = attrs[key];
            });
        }
    };
    return HomeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.Panel)
], HomeComponent.prototype, "panel", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map