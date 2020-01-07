
  

# drag-drop-view

  

This project provides some directives to help UI implementations with drag and drop.

  

## Installation

To install this package, run:
```bash
$ npm install drag-drop-view --save
```
  
and then from your Angular Aplication:

```typescript
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { AppComponent } from  './app.component';

// Import drag and drop view module
import { DragAndDropViewModule} from  'drag-drop-view';

@NgModule({
	declarations: [
		AppComponent
		],
	imports: [
		BrowserModule,
		// Add DragAndDropViewModule
		DragAndDropViewModule.forRoot()
		],
		providers: [],
		bootstrap: [AppComponent]
})
export  class AppModule { }
```

Once the modulo is imported, you can use directives to drag and drop your layout.
 

## Available directives

  

### DragAndDropChildrenDirective

This directive provides drag-and-drop functionality inside a html element.

#### How to use

Add directive to your element and pass your list to directive

```xml
<div drag-and-drop-children [list]="fields">
	<div *ngFor="let field of fields">
	{{field.name}}
	</div>
</div>
```

  

Its possible to ignore some children elements to don't allow drag and drop, for that you need:

```xml

<div drag-and-drop-children [list]="fields"  ignoreClass="ignore">
    <div *ngFor="let field of fields" [ngClass]="{'ignore': item.key == 2}">
    {{field.name}}
    </div>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:
```bash
$ npm run lint
```

  

  

## License

  

  

MIT © [# mfdiaspinto](mailto:mfdiaspinto@gmail.com )