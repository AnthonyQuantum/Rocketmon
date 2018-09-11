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
var router_1 = require("@angular/router");
var UpdatesDetailsComponent = (function () {
    function UpdatesDetailsComponent(route) {
        this.route = route;
    }
    UpdatesDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = (+params['id']).toString();
        });
    };
    UpdatesDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UpdatesDetailsComponent;
}());
UpdatesDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'updates-details',
        templateUrl: './updates-details.component.html',
        styleUrls: ['./updates-details.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], UpdatesDetailsComponent);
exports.UpdatesDetailsComponent = UpdatesDetailsComponent;
//# sourceMappingURL=updates-details.component.js.map