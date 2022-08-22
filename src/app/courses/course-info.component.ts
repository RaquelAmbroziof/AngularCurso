import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html',
})

export class CouseInfoComponent implements OnInit {

  courserId: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.courserId = +this.activatedRoute.snapshot.paramMap.get('id');
  }

}
