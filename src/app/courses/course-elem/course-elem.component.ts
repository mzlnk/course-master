import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../shared/model/course.model';

@Component({
  selector: 'app-course-elem',
  templateUrl: './course-elem.component.html',
  styleUrls: ['./course-elem.component.css']
})
export class CourseElemComponent implements OnInit {

  @Input() course: Course;
  @Output() courseRemoved = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  removeCourse(): void {
    this.courseRemoved.emit(this.course.id);
  }

}
