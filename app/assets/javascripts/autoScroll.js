var ani = false

$(window).keypress(function(event){
  event.preventDefault();

  if ((event.keyCode === 0 && ani === true) || (event.keyCode === 32 && ani === true)) {
    ani = false
    $('.parallax').stop()
  }else if ((event.keyCode === 0 && ani === false) || (event.keyCode === 32 && ani === false)) {
    ani = true
    
    $('.parallax').stop().animate({
      scrollTop: $(".parallax")[0].scrollHeight
    }, (($(".parallax")[0].scrollHeight-$(".parallax").scrollTop())/1000)*1000)
  }
})
  