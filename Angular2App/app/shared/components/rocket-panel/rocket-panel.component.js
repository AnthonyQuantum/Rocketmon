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
var RocketPanelComponent = (function () {
    function RocketPanelComponent() {
    }
    return RocketPanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.RocketPanel)
], RocketPanelComponent.prototype, "rocketPanel", void 0);
RocketPanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rocket-panel',
        templateUrl: './rocket-panel.component.html',
        styleUrls: ['./rocket-panel.component.css']
    }),
    __metadata("design:paramtypes", [])
], RocketPanelComponent);
exports.RocketPanelComponent = RocketPanelComponent;
//# sourceMappingURL=rocket-panel.component.js.map