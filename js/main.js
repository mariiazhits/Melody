$(document).ready(function () {
  var currentFloor = 02; 
  var floorPath = $(".home-image path")
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");

  //Значение счетчика этажей при наведении на картинку
  floorPath.on("mouseover", function(){
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  //Значение счетчика при нажатии кнопки "вверх" и подсветка выбранного этажа
  counterUp.on("click", function(){
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
//Значение счетчика при нажатии кнопки "вниз" и подсветка выбранного этажа
  counterDown.on("click", function(){
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});