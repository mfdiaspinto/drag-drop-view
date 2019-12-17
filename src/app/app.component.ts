import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  fields: any[] = [{key:1, name:'Test1'},{key:3, name:'Test3'},{key:4, name:'Test4'},{key:5, name:'Test5'},{key:6, name:'Test6'},{key:2, name:'Test2'}];
  show = true;
}
