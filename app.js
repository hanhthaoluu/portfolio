'use strict';
function projectData (name, path, description) {
  this.projectName = name;
  this.path = path;
  this.description = description;
}

$(document).ready(function(){

});

$('.main-nav').on('mouseover', function() {
  $(this).css("background-color", "green");
});
