import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../shared/service/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  addCourseForm;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group({
      courseName: '',
      courseDescription: '',
      photoUrl: '',
      courseEcts: 0,
      courseSemester: 1,
      courseAttendeesLimit: 1,
      courseType: 'Lecture'
    });
  }

  onCourseAdd(courseData): void {
    this.courseService.addCourse({
      id: this.courseService.randomId(),
      name: courseData.courseName,
      description: courseData.courseDescription,
      url: courseData.photoUrl,
      ects: courseData.courseEcts,
      semester: courseData.courseSemester,
      courseType: courseData.courseType,
      attendeesLimit: courseData.courseAttendeesLimit,
      rating: 3
    });
    this.router.navigate(['/']);
    alert('Added new course!');
  }

}
