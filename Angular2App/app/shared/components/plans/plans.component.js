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
var PlansComponent = (function () {
    function PlansComponent(cookiesService) {
        this.cookiesService = cookiesService;
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Hi. I'm Anthony Quantum. Now I'm developing this project just by myself and I will be glad to new members of the team. Let's do this!";
            this.word2 = "After finishing Sparrow, I will work on a project community and new rockets, now possible to make by anyone.";
        }
        else {
            this.word1 = decodeURIComponent('%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82.%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%BE%D0%B2%D1%83%D1%82%20Anthony%20Quantum.%20%D0%A1%D0%B5%D0%B9%D1%87%D0%B0%D1%81%20%D1%8F%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%20%D0%BD%D0%B0%D0%B4%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%BC%20%D0%B2%20%D0%BE%D0%B4%D0%B8%D0%BD%D0%BE%D1%87%D0%BA%D1%83,%20%D0%BD%D0%BE%20%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0%20%D0%B1%D1%83%D0%B4%D1%83%20%D1%80%D0%B0%D0%B4%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC%20%D1%87%D0%BB%D0%B5%D0%BD%D0%B0%D0%BC%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B.%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC%20%D1%8D%D1%82%D0%BE!');
            this.word2 = decodeURIComponent('%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%20%D0%B7%D0%B0%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%B8%D1%8F%20Sparrow,%20%D1%8F%20%D0%B1%D1%83%D0%B4%D1%83%20%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%20%D0%B8%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%BE%D0%B9%20%D0%BD%D0%BE%D0%B2%D1%8B%D1%85%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82.');
        }
    }
    return PlansComponent;
}());
PlansComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'plans',
        templateUrl: './plans.component.html',
        styleUrls: ['./plans.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], PlansComponent);
exports.PlansComponent = PlansComponent;
//# sourceMappingURL=plans.component.js.map