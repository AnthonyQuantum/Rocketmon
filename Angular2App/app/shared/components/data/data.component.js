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
var DataAnalysisComponent = (function () {
    function DataAnalysisComponent(cookiesService) {
        this.cookiesService = cookiesService;
        if (cookiesService.getCookie("lang") == "us") {
            this.name1 = "Points";
            this.name2 = "Users";
        }
        if (cookiesService.getCookie("lang") == "ru") {
            this.name1 = decodeURIComponent('%D0%A2%D0%BE%D1%87%D0%BA%D0%B8');
            this.name2 = decodeURIComponent('%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8');
        }
    }
    return DataAnalysisComponent;
}());
DataAnalysisComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'data',
        templateUrl: './data.component.html',
        styleUrls: ['./data.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService])
], DataAnalysisComponent);
exports.DataAnalysisComponent = DataAnalysisComponent;
//# sourceMappingURL=data.component.js.map