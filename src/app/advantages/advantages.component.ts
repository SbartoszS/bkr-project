import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      var showChar = 110;
      var ellipsestext = '...';
      var moretext = 'więcej';
      var lesstext = 'mniej';
      $('.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html =
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;</span><span class="morecontent"><span>' +
            h +
            '</span>&nbsp;&nbsp;<a href="" class="btn-more" style="text-decoration: none; outline: none;">' +
            moretext +
            '</a></span>';
          $(this).html(html);
        }
      });

      $('.btn-more').click(function () {
        if ($(this).hasClass('less')) {
          $(this).removeClass('less');
          $(this).html(moretext);
        } else {
          $(this).addClass('less');
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      });
    });
  }
}
