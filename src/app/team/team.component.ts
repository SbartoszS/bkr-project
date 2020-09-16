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
      navText: ['<span>&#10140;</span>', '<span>&#10140;</span>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }
}
