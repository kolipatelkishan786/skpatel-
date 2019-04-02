import {Component, OnInit} from '@angular/core';

declare let $: any;
declare let jQuery: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(window).load(function () {
      $('.flexslider').flexslider({
        animation: 'slide',
        start: function (slider) {
          $('body').removeClass('loading');
        }
      });
    });
    $(function () {
      $('#slider').responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1000,
        namespace: 'callbacks',
        before: function () {
          $('.events').append('<li>before event fired.</li>');
        },
        after: function () {
          $('.events').append('<li>after event fired.</li>');
        }
      });
    });
    $('document').ready(function () {
      $('#video').simplePlayer();
    });
  }

}
