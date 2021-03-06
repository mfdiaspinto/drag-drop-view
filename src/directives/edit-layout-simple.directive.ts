import { Directive, HostBinding, ElementRef, Renderer, ChangeDetectorRef, AfterViewInit, ViewChildren, Input, EventEmitter, Output } from '@angular/core';
import { CdkDropList, DragDrop, DropListRef, DragRef, moveItemInArray} from '@angular/cdk/drag-drop';

@Directive({
  selector: '[drag-and-drop-children]',
})
export class DragAndDropChildrenDirective {
  
    @Input('list')
    list:any[]

    @Input('ignoreClass')
    classToIgnore:string

    @Input('rebuild')
    set rebuild(list: any) {
      if (this.dropList) {
        setTimeout(() => {
          this.dropList = this.dragDropservice.createDropList(this.elementRef);
          let dragList: DragRef[] = [];
          let selt = this;

          Array.prototype.forEach.call(this.elementRef.nativeElement.children, function(o:any){
              let newElement = new ElementRef(o);
              let newElementDrag = selt.dragDropservice.createDrag(newElement);
              newElementDrag.disabled = selt.classToIgnore ? o.className.indexOf(selt.classToIgnore) !== -1 : false;
              dragList.push(newElementDrag);
          });

          this.dropList.withItems(dragList);
          this.dropList.dropped.subscribe(o => {
            moveItemInArray(this.list, o.previousIndex, o.currentIndex);
            moveItemInArray(dragList, o.previousIndex, o.currentIndex);

            this.change.emit(this.list);
          });
        }, 100);
      }
    }
    
    @Input('disabed')
    set disabled(value: boolean) {
      if (this.dropList) {
        this.dropList.disabled = value;
      } 
      this.isDisabled = value;
    }


    @Output() change = new EventEmitter();


    private isDisabled: boolean= false;
    private dropList: DropListRef;
    private editable: boolean = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer, private dragDropservice: DragDrop) {
    }

    ngAfterViewInit() {
 
      if (this.dropList) {
      } else {
        this.dropList = this.dragDropservice.createDropList(this.elementRef);
      }
      let dragList: DragRef[] = [];
      let selt = this;

      Array.prototype.forEach.call(this.elementRef.nativeElement.children, function(o:any){
          let newElement = new ElementRef(o);
          let newElementDrag = selt.dragDropservice.createDrag(newElement);
          newElementDrag.disabled = selt.classToIgnore ? o.className.indexOf(selt.classToIgnore) !== -1 : false;
          dragList.push(newElementDrag);
      });

      this.dropList.withItems(dragList);
      this.dropList.dropped.subscribe(o => {
        moveItemInArray(this.list, o.previousIndex, o.currentIndex);
        moveItemInArray(dragList, o.previousIndex, o.currentIndex);

        this.change.emit(this.list);
      });

      this.dropList.disabled = this.isDisabled;
    }
}
