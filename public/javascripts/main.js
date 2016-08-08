$(document).ready(function(){
    $("#header").sticky({topSpacing:0});
});

$('#header').on('sticky-start', function(){
  $('#header').css('box-shadow', '2px 6px 10px 0 rgba(0, 0, 0, 0.2), 2px 8px 22px 0 rgba(0, 0, 0, 0.19)');
})

$('#header').on('sticky-end', function(){
  $('#header').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
})