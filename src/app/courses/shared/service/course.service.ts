import {Injectable} from '@angular/core';
import {CoursesModule} from '../../courses.module';
// @ts-ignore
import * as coursesData from '../../../../assets/courses.json';
import {Course} from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: any = {};

  constructor() {
    this.loadCourses();
  }

  private loadCourses(): void {
    console.log(coursesData.courses);
    for (const c of coursesData.courses) {
      this.courses[c.id] = c;
    }
  }

  public getCourses(): any {
    const list = [];
    console.log('length: ' + Object.keys(this.courses).length);
    for (const id in this.courses) {
      list.push(this.courses[id]);
    }
    return list;
  }

  public getCourse(id: string): Course {
    return this.courses[id];
  }

  public addCourse(course: Course): void {
    this.courses[course.id] = course;
  }

  public removeCourse(id: string): void {
    delete this.courses[id];
  }

  public randomId(): string {
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    return letter[this.getRandomInt(0, 11)] + this.getRandomInt(0, 1000);
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

}
