//user-interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#userInput").val());
    var result = leapYear(year);
    $("#result").text(result);
  })
})
