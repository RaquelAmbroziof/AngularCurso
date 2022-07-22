import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { webSocket } from "rxjs/webSocket";



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, 
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
