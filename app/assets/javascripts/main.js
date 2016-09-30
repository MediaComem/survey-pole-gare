var surveyManager = {
	setupQ1: function(){
		$("#q1 .radio input").change(function() {
      if($(this).parent().text().indexOf("Jamais") > -1){
				$('.only-for-frequentation').hide()
      }else{
      	$('.only-for-frequentation').show()
      }
		});
	},
  setupQ2: function(){
  	var count = 0
  	$("#q2 .checkbox input").change(function() {
  		count = $("#q2 [type='checkbox']:checked").length;
      if(count == 2){
      	$("#q2 .checkbox input:not(:checked)").attr("disabled", true);
      }else{
      	$("#q2 .checkbox input").attr("disabled", false);
      }
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).siblings('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).siblings('.form-group').hide()
      }
		});
	},
	setupQ6: function(){
		$("#q6 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ101: function(){
		$("#q101 .checkbox input").change(function() {
			count = $("#q101 [type='checkbox']:checked").length;
      if(count == 3){
      	$("#q101 .checkbox input:not(:checked)").attr("disabled", true);
      }else{
      	$("#q101 .checkbox input").attr("disabled", false);
      }
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ7: function(){
		$("#q7 select").change(function() {
      if($(this).val() == 'Autre'){
      	console.log($(this).parents().eq(2))
				$(this).parents().eq(2).find('.form-group').show()
      }else{
      	$(this).parents().eq(2).find('.form-group').hide()
      }
		});
	},
	setupQ11: function(){
		$("#q11 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ12: function(){
		$("#q12a").hide()
		$("#q12 .radio input").change(function() {
			console.log($(this).parent().text().indexOf("Oui"))
      if($(this).parent().text().indexOf("Oui") > -1){
				$("#q12a").show()
      }else{
      	$('#q12a .checkbox').find(':checked').prop('checked','')
      	$('#q12a input[type=text]').val("")
      	$("#q12a").hide()
      }
		});
	},
	setupQ12a: function(){
		$("#q12a .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ9: function(){
		$("#q9 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ15: function(){
		var count = 0
  	$("#q15 .checkbox input").change(function() {
  		count = $("#q15 [type='checkbox']:checked").length;
      if(count == 3){
      	$("#q15 .checkbox input:not(:checked)").attr("disabled", true);
      }else{
      	$("#q15 .checkbox input").attr("disabled", false);
      }
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ17: function(){
		$("#q17a").hide()
		$("#q17b").hide()
		$("#q17 .radio input").change(function() {
			console.log($(this).parent().text().indexOf("Oui"))
      if($(this).parent().text().indexOf("Oui") > -1){
				$("#q17a").show()
				$("#q17b").show()
      }else{
      	$('#q17a .checkbox').find(':checked').prop('checked','')
      	$('#q17a input[type=text]').val("")
      	$("#q17a").hide()
      	$("#q17b .radio input").attr('checked', false);
      	$("#q17b").hide()
      }
		});
	},
	setupQ17a: function(){
		$("#q17a .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(3).next('.form-group').hide()
      }
		});
	},
	setupQ22: function(){
		$('#q22a').hide()
		$("#q22 select").change(function() {
      if($(this).val() == 'Pas d\'enfants'){
				$('#q22a').hide()
      }else{
      	$('#q22a').show()
      }
		});
	}
}


var makeSortableV2 = function(questionId, maxActiveElements) {

	questionId = "#" + questionId;

	var dragImg = $(questionId + ' .other-item img'),
	listPlaceholder = $(questionId + ' .sort-placeholder'),
	otherInput = $(questionId + ' .other-input'),
	otherSpan = $(questionId + ' .other-span');

	otherSpan.hide();

	$( function() {
		console.log($( questionId + ' .source-list, ' + questionId + ' .sortable-list' ))
		$( questionId + ' .source-list, ' + questionId + ' .sortable-list' ).sortable({
			connectWith: ".connected-sortable",
			handle: "img",
			stop: function( event, ui ) {
				var listCount = $(questionId + ' .sortable-list').children("li").length,
				sourceList = $(questionId + ' .source-list');

                if(listCount == 0) {                                            // displays placeholder if list is empty
                	listPlaceholder.css('visibility', 'visible');
                } else if(listCount == maxActiveElements){                        // if max answer choice reached the source list elements are disabled
                	sourceList.children('li').addClass("gm-inactive");
                	sourceList.children('li').children('img').addClass("hidden");
                } else {
                    if($('img.hidden').length > 0) {                            // if elements are disabled it will remove the disabeling class
                    	sourceList.children('li').children('img').removeClass("hidden");
                    	sourceList.children('li').removeClass("gm-inactive");
                    }
                    listPlaceholder.css('visibility', 'hidden');
                  }

                  $('ol').css("list-style-type", "decimal")

                if(ui.item.hasClass('other-item')){                                // check if other-item was dropped in a zone;
                	displayOtherItemSpan(questionId, otherSpan, otherInput);
                	displayOtherItemInput(questionId, otherSpan, otherInput);
                };
                
                changeItemValue(questionId, maxActiveElements);
              },
              start: function(event, ui) {
              	$(questionId + ' ol').css("list-style-type", "none")
              }
            });
	});

	$(questionId + ' .other-item').on('click', function() {
		displayOtherItemSpan(questionId, otherSpan, otherInput);
		otherInput.focus();
	})

	otherInput.focusout(function() {
		displayOtherItemInput(questionId, otherSpan, otherInput);
	})

};

var displayOtherItemInput = function(questionId, otherSpan, otherInput) {
	if(otherInput.parents(questionId + ' .sortable-list').length == 1){    
		var content = otherInput.val();
		otherSpan.html(content);

		otherInput.hide();
		otherSpan.show();
	}
}

var displayOtherItemSpan = function(questionId, otherSpan, otherInput) {
	if($(questionId + ' li.other-item .other-input').css('display') == 'none') {
		var content = otherSpan.html();                            
		otherInput.val(content);

		otherSpan.hide();                                                                                 
		otherInput.show();
	}
}

var changeItemValue = function(questionId, maxActiveElements) {
	$.each($(questionId + ' .sortable-list .sort-item'), function(i, item) {
		var value = maxActiveElements - i;
		$(item).find('.sortable-list-value').attr('value', value);
	})
}

var makeSortableV3 = function(questionId, maxActiveElements) {
    var questionId = "#" + questionId;
    var activeEl, inactiveEl, active, inactive = null;
    var activeElementsCount = 0;
    var otherInput = $(questionId + ' .other-input');
    var otherSpan = $(questionId + ' .other-span');
    
    otherSpan.hide();
    
    activeEl =  $(questionId + ' .gm-selected').get(0);
    inactiveEl =  $(questionId + ' .gm-unselected').get(0);
    $(inactiveEl).on('click', '.btn', function(event) {
        activeElementsCount = $(activeEl).find("li").length;
        
        $(questionId + ' .other-item').on('click', function() {
            console.log("other item clicked");
            displayOtherItemSpanV3(questionId, otherSpan, otherInput);
            otherInput.focus();
        })
        
        if ( activeElementsCount < maxActiveElements) { // Limit the number of choices
            $(this).closest('li').appendTo(activeEl); // Move the list item up into the selected area
            $(this).removeClass('glyphicon-plus').addClass('glyphicon-minus'); // Change the buttons icon from + to -
            // Renumber the hidden inputs
            $(activeEl).find('li').each(function(counter, el) {
                $(el).find('.hidden input').val(maxActiveElements-counter);
            });
            // Replace the event to do the inverse
            $(this).off('click').on('click', function(event) {
                $(this).closest('li').prependTo(inactiveEl); // Move down
                $(this).removeClass('glyphicon-minus').addClass('glyphicon-plus'); // Swap icons
                $(this).closest('li').find('.hidden input').val(0); // Set 0 as default value
                $(inactiveEl).children('li').removeClass("gm-inactive"); // Make sure elements are visually active again
                $(inactiveEl).find('.btn').removeClass('btn-disabled');
                
                $(this).off('click'); // And be sure to remove this event when the element has been moved
            });
        }
        
        if (activeElementsCount === maxActiveElements -1){                // When the maximum number of options is reached, visually display that no more can be added.
            console.log($(inactiveEl).children('li'))
            $(inactiveEl).children('li').addClass("gm-inactive");
            $(inactiveEl).find('.btn').addClass('btn-disabled');
        }
        
        if($(this).parent('.gm-selectable').hasClass('other-item')){                                // check if other-item was dropped in a zone;
            console.log("added");
            displayOtherItemInputV3(questionId, otherSpan, otherInput);
        };
        
    });
    
    otherInput.focusout(function() {
        console.log("focus out");
        displayOtherItemInputV3(questionId, otherSpan, otherInput);
    })
}

var displayOtherItemInputV3 = function(questionId, otherSpan, otherInput) {
    if(otherInput.parents(questionId + ' .gm-unselected').length == 0 && otherInput.val() != ''){    
        console.log("other span show");
        var content = otherInput.val();
        otherSpan.html(content);
        
        otherInput.hide();
        otherSpan.show();
    }
}

var displayOtherItemSpanV3 = function(questionId, otherSpan, otherInput) {
    console.log("show input", $(questionId + ' li.other-item .other-input').css('display'))
    if($(questionId + ' li.other-item .other-input').css('display') == 'none') {
        var content = otherSpan.html();                            
        otherInput.val(content);
        
        otherSpan.hide();                                                                                 
        otherInput.show();
    }
}
$(function() {
	surveyManager.setupQ1()
  surveyManager.setupQ2()
  surveyManager.setupQ6()
  surveyManager.setupQ7()
  surveyManager.setupQ9()
  surveyManager.setupQ11()
  surveyManager.setupQ101()
  surveyManager.setupQ12()
  surveyManager.setupQ12a()
  surveyManager.setupQ15()
  surveyManager.setupQ17()
  surveyManager.setupQ17a()
  surveyManager.setupQ22()
  makeSortableV3("q6", 4);
  makeSortableV3("q2", 2);

  $('.precision').hide()
  $("form").submit(function() {
    $("input").removeAttr("disabled");
	});
	$("form").bind("keypress", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  });
  $(window).resize(function() {
		if(Modernizr.mq('(max-width: 884px)')){	
			$('#image').insertAfter('.footer');
		} else {
			$('#image').insertBefore('.content');
		}
	});
})