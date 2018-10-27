import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mh-exercises-end',
  templateUrl: './exercises-end.component.html',
  styleUrls: ['./exercises-end.component.scss']
})
export class ExercisesEndComponent implements OnInit {
  @Input() steps: [] = [];

  constructor() { }

  ngOnInit() {
  }

}
