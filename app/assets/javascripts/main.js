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
  		count = $("[type='checkbox']:checked").length;
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
	setupQ7: function(){
		$("#q7 .radio input").change(function() {
      if($(this).parent().text() == 'Autre'){
				$(this).parents().eq(3).next('.form-group').show()
      }else{
      	$(this).parents().eq(3).siblings('.form-group').hide()
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
	setupQ10: function(){
		$("#q10 .checkbox input").change(function() {
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
  		count = $("[type='checkbox']:checked").length;
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
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ22: function(){
		$('#q22a').hide()
		$("#q22 .radio input").change(function() {
      if($(this).parent().text() == 'Pas d\'enfants'){
				$('#q22a').hide()
      }else{
      	$('#q22a').show()
      }
		});
	},
	setupQ26: function(){
		locationChoice($('#home-map'),'location_choice',26);
	},
	setupQ27: function(){
		locationChoice($('#work-map'),'work_location_choice',27);
	},
	enableTypeaheadQ28: function(){
		var engine = new Bloodhound({
    	local: gmVilles,
    	queryTokenizer: Bloodhound.tokenizers.whitespace,
    	datumTokenizer: Bloodhound.tokenizers.whitespace
  	});
		$(".gm-city-autocomplete-input").typeahead({hint: true, highlight: true}, {source: engine});
	},
	disableTypeaheadQ28: function(){
		$(".gm-city-autocomplete-input").typeahead('destroy');
	}
}

/* Display Map or commune autocomplete for location */
var locationChoice = function(elem,radiogroup,qn){
	$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').hide();
	$("input[name="+radiogroup+"]:radio").change(function(){
		$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').val('');
		if($(this).val() == 'autre'){
			$(elem).hide();
			$(elem).siblings('.center-map').hide();
			surveyManager.disableTypeaheadQ28()
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').show();
		}
		if($(this).val() == 'map'){
			$(elem).siblings('.center-map').show();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+']').val($(elem).siblings('.mapPlaceId').attr('data-id'));
			$(elem).show();
		}
		if($(this).val() == 'commune'){
			console.log($(elem))
			$(elem).siblings('.center-map').hide();
			$(elem).hide();
			surveyManager.enableTypeaheadQ28()
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q'+qn+'	]').show();
		}
	});
};
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
$(function() {
	surveyManager.setupQ1()
  surveyManager.setupQ2()
  surveyManager.setupQ6()
  surveyManager.setupQ7()
  surveyManager.setupQ9()
  surveyManager.setupQ12()
  surveyManager.setupQ12a()
  surveyManager.setupQ10()
  surveyManager.setupQ15()
  surveyManager.setupQ17()
  surveyManager.setupQ17a()
  surveyManager.setupQ22()
  surveyManager.setupQ26()
  surveyManager.setupQ27()
  makeSortableV2("q6", 4);
  $('.precision').hide()
  $("form").submit(function() {
    $("input").removeAttr("disabled");
	});
	$("form").bind("keypress", function(e) {
	    if (e.keyCode == 13) {
	      return false;
	    }
	  });
})