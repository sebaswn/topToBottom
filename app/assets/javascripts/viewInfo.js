

$(".info").mouseover(function(){
	thisElement = $(this)
	$.ajax( {
	    url: "https://en.wikipedia.org/w/api.php?action=query&titles="+ 
	                        $(this).attr("data-name") +"&prop=revisions&rvprop=content&rvsection=0&format=json",
	  
	    dataType: 'jsonp',
	    type: 'POST',
	    headers: { 'Api-User-Agent': 'Example/1.0' },
	    success: function(data) {
	    	
	    	var jsonObj = data.query.pages;
	    	
	        var PageID;
	        // Get property key name of page ID
	        for(var key in jsonObj) {
	            if(jsonObj.hasOwnProperty(key)) {
	                PageID = jsonObj[key];
	                break;
	            }
	        }
	        
	        content = PageID.revisions[0]['*']; 
	        contentSplit = content.split("\n\n");
	        contentSplitAgain = contentSplit[1].split("<ref>");
	        
	        // contentFinal = contentSplitAgain[0].replace("'", "")
	        contentReplace = contentSplitAgain[0].replace(/[&\/\\#=+$~%_'":*?<>{}]/g,'');
	        contentFinal = contentReplace.replaceAll('[','');
	        contentFinal = contentFinal.replaceAll(']','');
	        contentFinal = contentFinal.replaceAll("|",'-')

	        thisElement.attr("data-content", ""+contentFinal+"");
			thisElement.popover('show');
	    }
	} );
})

$(".info").mouseout(function(){
	$(this).popover('hide')
})

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
