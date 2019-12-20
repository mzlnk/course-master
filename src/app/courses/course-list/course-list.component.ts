import {Component, OnInit} from '@angular/core';
import {CourseService} from '../shared/service/course.service';
import {Course} from '../shared/model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onCourseRemoved(id: string): void {
    this.courseService.removeCourse(id);
    this.courses = this.courseService.getCourses(); // todo: check if correct way to update view
  }

}
