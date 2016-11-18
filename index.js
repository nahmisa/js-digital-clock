$(document).ready(function() { //anonymous function
  var getTime = function(){
    var d = new Date(); // for now
    return [d.getHours(), d.getMinutes(), d.getSeconds()];
  };

  var updateTime = function(){
    // get and format the current time
    var timeNow = getTime();
    var timeString = timeNow[0] + ":" + timeNow[1] + "." + timeNow[2];
    // clear the contents of the div so we replace the time instead
    // of stringing it together horizontally
    $('#clock').html("");
    $('#clock').append(timeString);
  };

  // call updateTime at an interval of every second -- time is in miliseconds
  var intervalID = window.setInterval(updateTime, 1000);

});
