(function($){
$(document).ready(function(){

$("#miyc-menu").menumaker({
    title: "Menu",
    breakpoint: 768,
    format: "multitoggle"
});

$("#miyc-menu").prepend("<div id='menu-line'></div>");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#miyc-menu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$(".miyc-menu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $(".miyc-menu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$(".miyc-menu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});
})(jQuery);
