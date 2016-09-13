var surveyManager = {
  setupQ1: function(){
  	var count = 0
  	$("#q1 .checkbox input").change(function() {
  		count = $("[type='checkbox']:checked").length;
      if(count == 2){
      	$("#q1 .checkbox input:not(:checked)").attr("disabled", true);
      }else{
      	$("#q1 .checkbox input").attr("disabled", false);
      }
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ6: function(){
		$("#q6 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ7: function(){
		$("#q7 .radio input").change(function() {
      if($(this).parent().text() == 'Autre'){
				$(this).parents().eq(1).next('.form-group').show()
      }else{
      	$(this).parents().eq(1).siblings('.form-group').hide()
      }
		});
	},
	setupQ9: function(){
		$("#q9 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ11: function(){
		$("#q11 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ12: function(){
		$("#q12 .checkbox input").change(function() {
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ16: function(){
		var count = 0
  	$("#q16 .checkbox input").change(function() {
  		count = $("[type='checkbox']:checked").length;
      if(count == 3){
      	$("#q16 .checkbox input:not(:checked)").attr("disabled", true);
      }else{
      	$("#q16 .checkbox input").attr("disabled", false);
      }
      if($(this).parent().text() == 'Autre' && ($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').show()
      }
      if($(this).parent().text() == 'Autre' && !($(this).prop('checked'))){
				$(this).parents().eq(1).next('.form-group').hide()
      }
		});
	},
	setupQ2324: function(){
		$("#q23 .radio input").change(function() {
      if($(this).parent().text() == 'Pas d\'enfants'){
				$('#q24').hide()
      }else{
      	$('#q24').show()
      }
		});
	}
}

/* Display Map or commune autocomplete for location */
var locationChoice = function(elem,radiogroup){
	$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').hide();
	$("input[name="+radiogroup+"]:radio").change(function(){
		$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').val('');
		if($(this).val() == 'etranger'){
			$(elem).siblings('.center-map').hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').hide();
			$(elem).hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').val('étranger');
		}
		if($(this).val() == 'autres'){
			$(elem).hide();
			$(elem).siblings('.center-map').hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').val('autres');
		}
		if($(this).val() == 'map'){
			$(elem).siblings('.center-map').show();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').val($(elem).siblings('.mapPlaceId').attr('data-id'));
			$(elem).show();
		}
		if($(this).val() == 'commune'){
			$(elem).siblings('.center-map').hide();
			console.log($(elem).siblings())
			$(elem).hide();
			$(elem).siblings('.gm-city-autocomplete').find('input[name*=q28]').show();
		}
	});
};
$(function() {
  surveyManager.setupQ1()
  surveyManager.setupQ6()
  surveyManager.setupQ7()
  surveyManager.setupQ9()
  surveyManager.setupQ11()
  surveyManager.setupQ12()
  surveyManager.setupQ16()
  surveyManager.setupQ2324()

  var engine = new Bloodhound({
    local: gmVilles,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: Bloodhound.tokenizers.whitespace
  });
  $(".gm-city-autocomplete-input").typeahead({hint: true, highlight: true}, {source: engine});
  locationChoice($('#home-map'),'location_choice');
  $("form").bind("keypress", function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  });
})