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
  def admin
    @users = Survey.all

    respond_to do |format|
      format.html
      format.csv {
        send_data @users.to_csv.encode("iso-8859-1", :invalid => :replace, :undef => :replace, :replace => "?"),
          :type => 'text/csv; charset=iso-8859-1; header=present',
          :disposition => "attachment; filename=answers.csv" 
      }
    end
  end
end
private
  def survey_params
    params.require(:survey).permit(:q2, :q3, :q5, :q10,:q28, q1: params[:survey][:q1].try(:keys),q4: params[:survey][:q4].try(:keys), q5: params[:survey][:q5].try(:keys), q6: params[:survey][:q6].try(:keys), q7: params[:survey][:q7].try(:keys), q14: params[:survey][:q14].try(:keys))
  end