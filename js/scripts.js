//business logic

var leapYear = function(year){
  if (year%4 === 0){
    if (year % 100 === 0 ) {
      return false
    } else {
      return true
    };
  } else {
    return false;
  };
};

//user-interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#userInput").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
