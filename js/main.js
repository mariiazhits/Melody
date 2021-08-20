$(document).ready(function () {
  var currentFloor = 02; 
  var floorPath = $(".home-image path")
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var btnModalClose = $(".modal-close-button");
  var btnViewFlats = $(".view-flats");

  var flatPath = $(".flats path");
  var flatLink = $(".flat-link");

  //Значение счетчика этажей при наведении на картинку
  floorPath.on("mouseover", function(){
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  //Функция выделения квартир и на схеме, и в списке квартир справа 
  flatPath.on("mouseover", function(){
    currentFlat = $(this).attr("data-flat");
    $(`[flat-number=${currentFlat}]`).removeClass("active-flat");
    flatPath.removeClass("current-floor");
    $(".flat-link").removeClass("active-flat");
    $(`[flat-number=${currentFlat}]`).toggleClass("active-flat");
  });

  //Функция для очищения выделения элемента в списке квартир справа, после того, как пользователь перестал бродить по самой схеме 
  flatPath.on("mouseleave", function(){
    currentFlat = $(this).attr("data-flat");
    $(`[flat-number=${currentFlat}]`).removeClass("active-flat");
  });
  

  //Функция подсветки квартиры при наведении на неё в списке квартир. Пока не работает. 
  flatLink.on("mouseover", function () {
    currentFlat = $(this).attr('flat-number');
    console.log(currentFlat);
    $(`[data-flat=${currentFlat}]`).toggleClass("current-floor");
  });
  

  floorPath.on("click", toggleModal);
  btnModalClose.on("click", toggleModal);
  btnViewFlats.on("click", toggleModal);

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

  function toggleModal(){
    modal.toggleClass("modal-is-open");
  }
});