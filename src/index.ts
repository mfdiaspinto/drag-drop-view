import { NgModule, ModuleWithProviders } from "@angular/core";
import { DragAndDropChildrenDirective } from "./directives/edit-layout-simple.directive";
export { DragAndDropChildrenDirective } from "./directives/edit-layout-simple.directive";
import { DragAndDropToDirective } from "./directives/drag-drop-multi-list.directive";
export { DragAndDropToDirective } from "./directives/drag-drop-multi-list.directive";
import { DragAndDropConnectTo } from "./models/connectTo.model";
export { DragAndDropConnectTo } from "./models/connectTo.model";

@NgModule({
  imports: [
  ],
  declarations: [
    DragAndDropChildrenDirective,
    DragAndDropToDirective
  ],
  entryComponents: [
  ],
  providers: [
  ],
  exports: [
    DragAndDropChildrenDirective, 
    DragAndDropToDirective
  ]
})
export class DragAndDropViewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DragAndDropViewModule,
    }; 
  }
}

