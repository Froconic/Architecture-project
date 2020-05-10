/* eslint-disable no-undef */
'use strict';

$(document).ready(() => {
  var $window = $(window);
  var $body = $('body');

  // Breakpoints.
  breakpoints({
    wide: ['1281px', '1680px'],
    normal: ['981px', '1280px'],
    narrow: ['841px', '980px'],
    narrower: ['737px', '840px'],
    mobile: ['481px', '736px'],
    mobilep: [null, '480px'],
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Dropdowns.
  $('#nav > ul').dropotron({
    offsetY: -15,
    hoverDelay: 0,
    alignment: 'center',
  });

  // Nav.

  // Bar.
  $(
      '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' + $('#logo').html() + '</span>' +
      '</div>'
    )
    .appendTo($body);

  // Panel.
  $(
      '<div id="navPanel">' +
      '<nav>' +
      $('#nav').navList() +
      '</nav>' +
      '</div>'
    )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'navPanel-visible',
    });
});

// Anchor-menu hover text
$('.anchor-menu ul li a i').hover(
  function () {
    $(this).removeClass('far');
    $(this).addClass('fas');
    $(this).siblings().css('width', 'auto');
  },
  function () {
    $(this).removeClass('fas');
    $(this).addClass('far');
    $(this).siblings().css('width', '0');

  }
);

// Services section functionality
// Display text on icon hover
$('#services-nav ul li a i').hover(
  function () {
    $(this).siblings().css('opacity', '1');
  },
  function () {
    $(this).siblings().css('opacity', '0');
  }
);

// $('.anchor:target::before').offset(
//   {
//     top: -10,
//     left: -30,
//   }
// );