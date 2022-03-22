
$( document ).ready(function() {
  
  alert("The document is loaded. Click on the icons to view the information")
  $("#btn-4").click(function(){
    $("#skil").toggle();
  });
  
  
  $("#btn-2").click(function(){
    $("#about").toggle();
  });
  
  $("#btn-3").click(function(){
    $("#educate").toggle();
  });


});