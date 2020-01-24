import { Component, ViewChild, ElementRef, ViewEncapsulation, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DragAndDropConnectTo } from 'index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  fields: any[] = [{key:1, name:'Test1'},{key:3, name:'Test3'},{key:4, name:'Test4'},{key:5, name:'Test5'},{key:6, name:'Test6'},{key:2, name:'Test2'}];
  show = true;

  @ViewChild('todo', { read: ViewContainerRef, static: false })
  public todo: ViewContainerRef;

  @ViewChild('done', { read: ViewContainerRef, static: false })
  public done: ViewContainerRef;

  
  doneList: any[] = [{key:1, name:'Task 1'},{key:2, name:'Task 2'},{key:3, name:'Task 3'},{key:4, name:'Task 4'}];
  todoList: any[] = [{key:0, name:'Task 0'},{key:5, name:'Task 5'}];

  print(data) {
    console.log(data);
  }

  connectTo: DragAndDropConnectTo = new DragAndDropConnectTo();


  ngAfterViewInit() { 
     this.connectTo = {
        data : this.todoList,
        viewElement : this.done
     }
  }
  
}
