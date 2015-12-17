 $(window).load(function() {
     $(".showPage").show();
     $('.loading').hide();

     $(".showPage").click(function(){
       $('#loading').hide();

       $(".parallax").show();
       $(".topTitle").show();

       
     })
  });