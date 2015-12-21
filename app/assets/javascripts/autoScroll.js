var ani = false

$(window).keypress(function(event){
  event.preventDefault();
 

  if ((event.keyCode === 0 && ani === true) || (event.keyCode === 32 && ani === true)) {
    ani = false
    $(".spaceBarJpg").css("opacity", "1")
    $(".spaceName").css("color", "black")


    $('.parallax').stop()
  }else if ((event.keyCode === 0 && ani === false) || (event.keyCode === 32 && ani === false)) {
    ani = true
    
    $(".spaceBarJpg").css("opacity", "0.6")
    $(".spaceName").css("color", "white")


    $('.parallax').stop().animate({
      scrollTop: $(".parallax")[0].scrollHeight
    }, (($(".parallax")[0].scrollHeight-$(".parallax").scrollTop())/1000)*1000)
  }
})
  