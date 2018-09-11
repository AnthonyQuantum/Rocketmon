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
var Panel_model_1 = require("./Panel.model");
var cookies_service_1 = require("../../services/cookies.service");
var StorePanelComponent = (function () {
    function StorePanelComponent(cookiesService) {
        this.cookiesService = cookiesService;
        if (cookiesService.getCookie("lang") == "us") {
            this.word = "Buy";
        }
        else {
            this.word = decodeURIComponent('%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C');
        }
    }
    return StorePanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.Panel)
], StorePanelComponent.prototype, "panel", void 0);
StorePanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'store-panel',
        templateUrl: './store-panel.component.html',
        styleUrls: ['./store-panel.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], StorePanelComponent);
exports.StorePanelComponent = StorePanelComponent;
//# sourceMappingURL=store-panel.component.js.map