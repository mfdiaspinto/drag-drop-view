import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  fields: any[] = [{key:1},{key:3},{key:4},{key:5},{key:6},{key:2}];


}
