import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwipper: Swiper;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mySwipper = new Swiper('.swiper-container');
  }

}
