class SurveysController < ApplicationController
  def new
  end
  def create
  	render plain: params[:survey].inspect
  	# @survey = Survey.new(survey_params)
 
  	# @survey.save
  	# redirect_to @survey
	end
end
private
  def survey_params
    params.require(:survey).permit(:q1, :q2, :q3, :q4)
  end