import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { FontAwesomeModule }  from  '@fortawesome/angular-fontawesome' ;
import { webSocket } from "rxjs/webSocket";
import { ReplacePipe } from './pipe/replace.pipe';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404-component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([ // forRoot espera um array de objetos do tipo rota
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' // rota raiz
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component // ** rota desconhecida/nao encontrada/nao definida
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
