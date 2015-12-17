 $(window).load(function() {
     $(".showPage").show();
     $('.loading').hide();

     $(".showPage").click(function(){
       	$(".parallax").show()	
       $('#loading').fadeOut(900, function(){
       		$(".topTitle").show()	
       })


       
     })
  });