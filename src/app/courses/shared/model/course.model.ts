export interface Course {
  id: string;
  name: string;
  description: string;
  url: string;
  ects: number;
  semester: number;
  courseType: CourseType;
  attendeesLimit: number;
  rating: number;
}

export enum CourseType {
  Lecture,
  Practicals,
  Lab,
  Project
}
