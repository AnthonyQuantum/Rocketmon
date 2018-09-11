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
var Panel_model_1 = require("../rocket-panel/Panel.model");
var cookies_service_1 = require("../../services/cookies.service");
var RocketListComponent = (function () {
    function RocketListComponent(cookiesService) {
        this.cookiesService = cookiesService;
        if (cookiesService.getCookie("lang") == "us") {
            this.word = "Multi-purpose meteorological rocket";
        }
        else {
            this.word = decodeURIComponent('%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0');
        }
        this.rocketPanels = [
            new Panel_model_1.RocketPanel('Sparrow', '2.0.0', '1S, 9U, RS, v1 motor', 'app/../img/Spr.png'),
            new Panel_model_1.RocketPanel('Canary', '1.0.0', '1S, 12U, RS, v1 motor', 'app/../img/Cnr.png')
        ];
    }
    return RocketListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.RocketPanel)
], RocketListComponent.prototype, "rocketPanel", void 0);
RocketListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rocket-list',
        templateUrl: './rocket-list.component.html',
        styleUrls: ['./rocket-list.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], RocketListComponent);
exports.RocketListComponent = RocketListComponent;
//# sourceMappingURL=rocket-list.component.js.map