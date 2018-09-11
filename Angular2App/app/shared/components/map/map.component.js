"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var google;
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    })
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map