import { Component, OnInit } from '@angular/core';
import {
  CAROUSEL_CARD,
  FAQ_PARAGRAPH,
  INNER_CAROUSEL,
  LINK_ITEM,
} from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carouselCard = CAROUSEL_CARD;
  innerCarousel = INNER_CAROUSEL;
  linkItem = LINK_ITEM;
  faqParagraph = FAQ_PARAGRAPH;
  changeBlockDirection = false;

  constructor() {
    this.linkItem.find((obj: any) => {
      if (obj.id % 2) {
        this.changeBlockDirection = true;
      }
    });
  }
  ngOnInit(): void {}
}
