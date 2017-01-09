// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(window).scroll(function()
  {
   var wScroll = $(this).scrollTop(); 
   $('.logo').css(
   {
      'transform' : 'translate(0px, '+ wScroll /8 +'%)' 
   });
    
    $('.back-bird').css(
   {
      'transform' : 'translate(0px, '+ wScroll /8 +'%)' 
   });
    
    $('.fore-bird').css(
   {
      'transform' : 'translate(0px, '+ wScroll /40 +'%)' 
   });
    
  });