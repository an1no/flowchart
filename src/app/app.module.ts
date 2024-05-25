import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFlowComponent } from './add-flow/add-flow.component';
import { LeftAccordionComponent } from './add-flow/left-accordion/left-accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightAccordionComponent } from './add-flow/right-accordion/right-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFlowComponent,
    LeftAccordionComponent,
    RightAccordionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
