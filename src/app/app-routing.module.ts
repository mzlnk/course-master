import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CourseSearchComponent} from './courses/course-search/course-search.component';
import {CourseAddComponent} from './courses/course-add/course-add.component';
import {CourseShowComponent} from './courses/course-show/course-show.component';
import {WelcomeComponent} from './home/welcome/welcome.component';
import {SignInComponent} from './home/sign-in/sign-in.component';
import {SignUpComponent} from './home/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'courses',
    component: CourseSearchComponent
  },
  {
    path: 'add',
    component: CourseAddComponent,
  },
  {
    path: 'courses/:id',
    component: CourseShowComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
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

export class AppRoutingModule {
}
