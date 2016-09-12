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
	}
}
$(function() {
  surveyManager.setupQ1()
  surveyManager.setupQ6()
  surveyManager.setupQ7()
  surveyManager.setupQ9()
})