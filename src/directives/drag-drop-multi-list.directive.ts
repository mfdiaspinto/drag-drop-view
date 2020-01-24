import { Directive, HostBinding, ElementRef, Renderer, ChangeDetectorRef, AfterViewInit, ViewChildren, Input, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { CdkDropList, DragDrop, DropListRef, DragRef, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import {DragAndDropConnectTo} from '../models/connectTo.model'

@Directive({
  selector: '[drag-and-drop-to]',
})
export class DragAndDropToDirective {
  
  private connectedElementRef: ElementRef;
  private connectedData:any[];
  connectDragList: DragRef[]= [];

  dragList: DragRef[] = [];
  @Input('list')
  data:any[]

  @Input('ignoreClass')
  classToIgnore:string
  
    @Output() change = new EventEmitter();

    private isDisabled: boolean= false;
    private dropList: DropListRef;
    private connectddropList: DropListRef;
    private editable: boolean = false;
    private lastValueToConnect :DragAndDropConnectTo;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer, private dragDropservice: DragDrop) {
    }

    @Input('drag-and-drop-to')
    set listToConnect(value: DragAndDropConnectTo) {
      this.lastValueToConnect = value;
      
      if (value && value.viewElement  && value.viewElement.element) {
  
        this.connectedElementRef = value.viewElement.element;
        this.connectedData = value.data;

        this.dropList = this.dragDropservice.createDropList(this.elementRef);
        this.connectddropList = this.dragDropservice.createDropList(this.connectedElementRef);
  
        let selt = this;
  
        // ADD drag to divs
        Array.prototype.forEach.call(this.elementRef.nativeElement.children, function(o:any){
          let newElement = new ElementRef(o);
          let newElementDrag = selt.dragDropservice.createDrag(newElement);
          selt.dragList.push(newElementDrag);
        });
        
        Array.prototype.forEach.call(this.connectedElementRef.nativeElement.children, function(o:any){
            let newElement = new ElementRef(o);
            let newElementDrag = selt.dragDropservice.createDrag(newElement);
            newElementDrag.disabled = selt.classToIgnore ? o.className.indexOf(selt.classToIgnore) !== -1 : false;
            selt.connectDragList.push(newElementDrag);
        });
  
        // Add drag items to drop list
        this.dropList.withItems(this.dragList);
        this.connectddropList.withItems(this.connectDragList);
  
        this.dropList.connectedTo([this.connectddropList]);     
        this.connectddropList.connectedTo([this.dropList]); 

        // subscribe drop
        this.dropList.dropped.subscribe(event => {
          if (event.previousContainer === event.container) {
            this.dropped(event, this.dragList, this.data, this.connectDragList, this.connectedData);
          } else {
            
            this.dropped(event, this.connectDragList, this.connectedData, this.dragList, this.data);

            let index = this.dragList.indexOf(event.item);
            this.dragList.splice(index, 1);
            this.addhtmlDrag(this.elementRef, this.dragList, this.dropList, index);
          }      
        });

        this.connectddropList.dropped.subscribe(event => {
          if (event.previousContainer === event.container) {
            this.dropped(event, this.connectDragList, this.connectedData, this.dragList, this.data);
          } else {
  
            this.dropped(event, this.dragList, this.data, this.connectDragList, this.connectedData);

            let index = this.connectDragList.indexOf(event.item);
            this.connectDragList.splice(index, 1);
            this.addhtmlDrag(this.connectedElementRef, this.connectDragList, this.connectddropList, index);
          }

          this.change.emit({ list: this.data, connectList: this.connectedData})
        });
      }
    }
  
  
    addhtmlDrag (element:ElementRef<any>, dragList:DragRef[], dropList: DropListRef, index:number) {
            
    setTimeout(() => {
      let self = this;
      let i = 0;
      Array.prototype.forEach.call(element.nativeElement.children, function(o:any){

        if (index == i) {
          let newElement = new ElementRef(o);
          let newElementDrag = self.dragDropservice.createDrag(newElement);
          dragList.splice(index, 0, newElementDrag);
        } 
          i++;
      });
      dropList.withItems(dragList);
    },100);
  }
  
    dropped (event:any, currentDragList:DragRef[], currentArray:any[], targetDragList:DragRef[], targetArray:any[]) {
      if (event.previousContainer === event.container) {
        moveItemInArray(currentArray, event.previousIndex, event.currentIndex);
        moveItemInArray(currentDragList, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(currentArray,
          targetArray,
          event.previousIndex,
          event.currentIndex);
  
        transferArrayItem(currentDragList,
            targetDragList,
            event.previousIndex,
            event.currentIndex);
      }
    }
  
    ngAfterViewInit() { 
     
    }
}
