var quiz= 0;
$(".one").click(function() {
    var first = Number($(".num").val());
    var second = $(".yay").val();
  
  if (second   === "strong" && second > 6) {
    $(".usagi").show();      
    }
  else if (first ==="inbetween" && second > 6){
    $(".niragi").show();
  }
  else if (first ==="inbetween" && second > 6){
    $(".niragi").show();
  }
    else if (first ==="inbetween" && second > 6){
      $(".niragi").show();
  }
 });
$(".retry").click(function() {

  $('#counter').text(Number($('#counter').text())+1);
  
  $(".usagi").hide();

  $(".niragi").hide();

  $(".arisu").hide(); 
  $(".chishiya").hide();
  
});
