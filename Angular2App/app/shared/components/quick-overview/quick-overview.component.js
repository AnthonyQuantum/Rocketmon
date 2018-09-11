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
var QuickOverviewComponent = (function () {
    function QuickOverviewComponent() {
        if (this.getCookie("lang") == "us") {
            this.word = "Atmosphere monitoring system powered by rockets";
        }
        else {
            this.word = decodeURIComponent('%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BC%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3%D0%B0%20%D0%B0%D1%82%D0%BC%D0%BE%D1%81%D1%84%D0%B5%D1%80%D1%8B%20%D0%BF%D1%80%D0%B8%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8%20%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%D0%B5%D1%82');
        }
    }
    QuickOverviewComponent.prototype.getCookie = function (cname) {
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
    };
    return QuickOverviewComponent;
}());
QuickOverviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'quick-overview',
        templateUrl: './quick-overview.component.html',
        styleUrls: ['./quick-overview.component.css']
    }),
    __metadata("design:paramtypes", [])
], QuickOverviewComponent);
exports.QuickOverviewComponent = QuickOverviewComponent;
//# sourceMappingURL=quick-overview.component.js.map