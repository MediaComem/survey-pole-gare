var surveyManager = {
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
	setupQ10: function(){
		$("#q10a").hide()
		$("#q10 .radio input").change(function() {
			console.log($(this).parent().text().indexOf("Oui"))
      if($(this).parent().text().indexOf("Oui") > -1){
				$("#q10a").show()
      }else{
      	$('#q10a .checkbox').find(':checked').prop('checked','')
      	$('#q10a input[type=text]').val("")
      	$("#q10a").hide()
      }
		});
	},
	setupQ10a: function(){
		$("#q10a .checkbox input").change(function() {
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
$(function() {
  surveyManager.setupQ2()
  surveyManager.setupQ6()
  surveyManager.setupQ7()
  surveyManager.setupQ9()
  surveyManager.setupQ10()
  surveyManager.setupQ10a()
  surveyManager.setupQ11()
  surveyManager.setupQ15()
  surveyManager.setupQ17()
  surveyManager.setupQ17a()
  surveyManager.setupQ22()
  surveyManager.setupQ26()
  surveyManager.setupQ27()
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