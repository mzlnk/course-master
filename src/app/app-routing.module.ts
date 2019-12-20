import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CourseSearchComponent} from './courses/course-search/course-search.component';
import {CourseAddComponent} from './courses/course-add/course-add.component';
import {CourseShowComponent} from './courses/course-show/course-show.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CourseSearchComponent
  },
  {
    path: 'add',
    component: CourseAddComponent,
  },
  {
    path: 'course/:id',
    component: CourseShowComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
