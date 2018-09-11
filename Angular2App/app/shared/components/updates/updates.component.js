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
var Panel_model_1 = require("../updates-panel/Panel.model");
var UpdatesComponent = (function () {
    function UpdatesComponent() {
        this.panels = [
            new Panel_model_1.Panel("Successful_5th_official_launch", 'app/../img/updates/1.png', 'Successful 5th official launch'),
            new Panel_model_1.Panel("Canary_WIP", 'app/../img/updates/Canary.png', 'Canary WIP')
        ];
    }
    return UpdatesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.Panel)
], UpdatesComponent.prototype, "panel", void 0);
UpdatesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'updates',
        templateUrl: './updates.component.html',
        styleUrls: ['./updates.component.css']
    }),
    __metadata("design:paramtypes", [])
], UpdatesComponent);
exports.UpdatesComponent = UpdatesComponent;
//# sourceMappingURL=updates.component.js.map