"use strict";

(function (jQuery) {

    jQuery.fn.greenify = function() {
      this.css( "color", "green" );
      return this;
    };

})(this.jQuery);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

ckan.module('eudm_theme_helper', function ($) {
  return {
    initialize: function () {
      //console.log("I've been initialized for element: ", this.el);
      //console.log(this);
      //console.log(this.options);
      //console.log($('input[name="pkg_name"]'));
      var fname = $('input[id="field-name"]').val();
      if(fname === 'undefined' || fname == '') {
         var newId = guid();
         $('input[id="field-name"]').val(newId); 
         console.log("UUID generated: " + newId);
      }
      //console.log($('div.slug-preview'));

      // $('.btn-mini').click(function() {
      //  console.log("btn mini clicked");
      // });
      //$( "<button data-module='eudm_theme_regen_uuid'><i class='fa fa-info-circle'></i> </button>" ).insertAfter( 'input[id="field-name"]' );

     }
   }
});
