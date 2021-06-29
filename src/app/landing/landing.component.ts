import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  items = [];

  constructor(titleService: Title) {
    titleService.setTitle('Home');
  }

  ngOnInit(): void {
  }

}
