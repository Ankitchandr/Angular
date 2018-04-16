import { Component } from '@angular/core';

// import Map from 'ol/map';
declare let ol:any;
declare let map:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latitude=51.678418;
  longitude=7.809007;
  locationChosen=false;
  onChooseLocation(event)
  {
  this.latitude=event.coords.lat;
  this.longitude=event.coords.lng;
  this.locationChosen=true;

  }
}
