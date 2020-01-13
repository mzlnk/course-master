import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../shared/service/course.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  private courseId: string;

  editCourseForm;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private courseService: CourseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(params => {
      if(params && params.id) {
        return this.courseService.getCourse(params.id);
      } else {
        return of(null);
      }
    }))
      .subscribe(course => {
        if(course == null) {
          return;
        }

        this.courseId = course.id;

        this.editCourseForm = this.formBuilder.group({
          courseName: course.name,
          courseDescription: course.description,
          photoUrl: course.url,
          courseEcts: course.ects,
          courseSemester: course.semester,
          courseAttendeesLimit: course.attendeesLimit,
          courseType: course.courseType
        });
      });
  }

  onCourseEdit(courseData): void {
    this.courseService.createOrUpdateCourse({
      id: this.courseId,
      name: courseData.courseName,
      description: courseData.courseDescription,
      url: courseData.photoUrl,
      ects: courseData.courseEcts,
      semester: courseData.courseSemester,
      courseType: courseData.courseType,
      attendeesLimit: courseData.courseAttendeesLimit,
      attendees: 0,
      rating: 0
    });

    this.router.navigate(['/courses']);
    alert('Course updated!');
  }

}
