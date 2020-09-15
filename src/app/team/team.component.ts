import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      slideSpeed: 300,
      paginationSpeed: 500,
      items: 3,
      dots: false,
      loop: true,
      nav: true,
      navText: ['<span>&#10229;</span>', '<span>&#10230;</span>'],
      responsive: {
        0: {
          items: 1,
          autoplay: false,
        },
        768: {
          items: 2,
        },
        1100: {
          items: 3,
        },
      },
    });
  }
}
