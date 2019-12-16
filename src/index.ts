import { NgModule, ModuleWithProviders } from "@angular/core";
import { DragAndDropSingleDivDirective } from "./directives/edit-layout-simple.directive";
export { DragAndDropSingleDivDirective } from "./directives/edit-layout-simple.directive";

@NgModule({
  imports: [
  ],
  declarations: [DragAndDropSingleDivDirective
  ],
  entryComponents: [
  ],
  providers: [
  ],
  exports: [DragAndDropSingleDivDirective
  ]
})
export class PrimaveraDragAndDropLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimaveraDragAndDropLayoutModule,
    };
  }
}

