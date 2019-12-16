import { Directive, HostBinding, ElementRef, Renderer, ChangeDetectorRef, AfterViewInit, ViewChildren, Input } from '@angular/core';
import { CdkDropList, DragDrop, DropListRef, DragRef, moveItemInArray} from '@angular/cdk/drag-drop';

@Directive({
  selector: '[drag-and-drop-single-div]',
})
export class DragAndDropSingleDivDirective implements AfterViewInit {
    @Input('list-to-order') list: any[];
    @Input('list-to-order-disabed')
    set disabled(value: boolean) {
      if (this.dropList) {
        this.dropList.disabled = value;
      } 
      this.isDisabled = value;
    }

    private isDisabled: boolean= false;
    private dropList: DropListRef;
    private editable: boolean = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer, private dragDropservice: DragDrop) {
    }

    ngAfterViewInit() {
      this.dropList = this.dragDropservice.createDropList(this.elementRef);
      let dragList: DragRef[] = [];
      let s = this.dragDropservice;

      Array.prototype.forEach.call(this.elementRef.nativeElement.children, function(o:any){
          let newElement = new ElementRef(o);
          let newElementDrag = s.createDrag(newElement);
          dragList.push(newElementDrag);
      });

      this.dropList.withItems(dragList);
      this.dropList.dropped.subscribe(o => {
        moveItemInArray(this.list, o.previousIndex, o.currentIndex);
        moveItemInArray(dragList, o.previousIndex, o.currentIndex);
      });

      this.dropList.disabled = this.isDisabled;
    }
}
