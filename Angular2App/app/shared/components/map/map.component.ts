import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {
ngOnInit() {
    var google: any;
    var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
  }
}
