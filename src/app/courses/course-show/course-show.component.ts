import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../shared/service/course.service';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-course-show',
  templateUrl: './course-show.component.html',
  styleUrls: ['./course-show.component.css']
})
export class CourseShowComponent implements OnInit, OnDestroy {

  course: any;

  rating: number;

  private sub: any;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.course = this.courseService.getCourse(params.id);
      this.rating = this.course.rating;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    this.course.rating = $event.newValue;
    this.courseService.createOrUpdateCourse(this.course);
  };

}
