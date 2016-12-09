$(function() {

$("#btn-click").click(function(e) {
  $(".person").empty().append($("input.person").val());
   $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
     $(".insect").empty().append($("input.insect").val());
      $(".noun2").empty().append($("input.plural-noun").val());
       $(".verb").empty().append($("input.verb").val());

$("#story").show();
 $(':input').val('');
  $("#questions").hide();
   });

  $("#play-btn").click(function(e) {
   $("#questions").show();
    $("#story").hide();
    });

  });
