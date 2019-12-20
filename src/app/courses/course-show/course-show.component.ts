import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../shared/service/course.service';

@Component({
  selector: 'app-course-show',
  templateUrl: './course-show.component.html',
  styleUrls: ['./course-show.component.css']
})
export class CourseShowComponent implements OnInit, OnDestroy {

  course: any;

  private sub: any;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.course = this.courseService.getCourse(params.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  stars(): number[] {
    const arr =  Array.from(Array(this.course.rating).keys());
    console.log('rate: ' + this.course.rate);
    console.log('array: ' + arr);
    return arr;
  }

}
