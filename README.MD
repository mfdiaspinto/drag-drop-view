
# drag-drop-view

This project provides some directives to help implementations with drag and drop.

## Installation

  

To install this library, run:

  
  

```bash

$ npm install drag-drop-view --save

```

  

## Consuming your library

  

Once you have published your library to npm, you can import your library in any Angular application by running:

  

```bash

$ npm install drag-drop-view

```

  

and then from your Angular `AppModule`:

  

```typescript

import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { AppComponent } from  './app.component';

// Import your library s
import { DragAndDropViewModule} from  'drag-drop-view';

@NgModule({
	declarations: [
		AppComponent
	],

	imports: [
		BrowserModule,  
		// Specify your library as an import
		DragAndDropViewModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export  class AppModule { }

```
Once your library is imported, you can use directives to drag and drop your layout

## Available directives

### DragAndDropChildrenDirective 
This directive  provides drag-and-drop functionality inside a html element.

#### How to use

Add directive to your element and pass your list to directive
 
```xml
<div drag-and-drop-children [list-to-order]="fields">
	<div  *ngFor="let field of fields">
		{{field.name}}
	</div>
</div>
```

Its possible to ignore some children elements to don't allow drag and drop, for that you need:
```xml
<div drag-and-drop-children [list-to-order]="fields" class-to-ignore="ignore">
	<div  *ngFor="let field of fields" [ngClass]="{'ignore': item.key == 2}">
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