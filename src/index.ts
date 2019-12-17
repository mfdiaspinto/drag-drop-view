import { NgModule, ModuleWithProviders } from "@angular/core";
import { DragAndDropChildrenDirective } from "./directives/edit-layout-simple.directive";
export { DragAndDropChildrenDirective } from "./directives/edit-layout-simple.directive";

@NgModule({
  imports: [
  ],
  declarations: [DragAndDropChildrenDirective
  ],
  entryComponents: [
  ],
  providers: [
  ],
  exports: [DragAndDropChildrenDirective
  ]
})
export class DragAndDropViewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DragAndDropViewModule,
    }; 
  }
}

