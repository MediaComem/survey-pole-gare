class SurveysController < ApplicationController
  def new
    file = File.read('public/quartiersPully.geojson')
    @quartiers_data_hash = JSON.parse(file)
  end
  def create
  	# render plain: params[:survey].inspect
  	@survey = Survey.new(survey_params)
    puts survey_params
    puts @survey
  	@survey.save
  	redirect_to @survey
	end
end
private
  def survey_params
    params.require(:survey).permit(:q2, :q3, q1: params[:survey][:q1].try(:keys),q4: params[:survey][:q4].try(:keys), q5: params[:survey][:q5].try(:keys))
  end