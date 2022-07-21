import {Component, OnInit } from '@angular/core';
import {Course} from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Curso 1',
                imageUrl: '',
                price: 10.0,
                code: 'DEF-456',
                duration: 3,
                rating: 5.0,
                releaseDate: '2022'
            },
            {
                id: 2,
                name: 'Curso 2',
                imageUrl: '',
                price: 10.0,
                code: 'ABC-123',
                duration: 2,
                rating: 5.0,
                releaseDate: '2022'

            }
        ]
    }

}