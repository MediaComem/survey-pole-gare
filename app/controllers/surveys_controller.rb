class SurveysController < ApplicationController

  before_filter :authenticate, only: [:admin]

  def new
    file = File.read('public/plein.geojson')
    @quartiers_data_hash = JSON.parse(file)
    file = File.read('public/vide.geojson')
    @vide_data_hash = JSON.parse(file)
  end
  def create
  	# render plain: params[:survey].inspect
  	@survey = Survey.new(survey_params)
    puts survey_params
    puts @survey
    @survey.ip_adress = request.remote_ip
    @survey.user_agent = request.user_agent
  	@survey.save
  	redirect_to action: "thanks"
	end
  def thanks
    render layout: "thanks"
  end
  def admin
    @users = Survey.where("created_at > ?", Date.new(2016, 10, 03))
    
    respond_to do |format|
      format.html
      format.csv {
        send_data @users.to_csv.encode("iso-8859-1", :invalid => :replace, :undef => :replace, :replace => "?"),
          :type => 'text/csv; charset=iso-8859-1; header=present',
          :disposition => "attachment; filename=answers.csv" 
      }
    end
  end
  private
    protected
      def authenticate
        authenticate_or_request_with_http_basic do |username, password|
        username == Rails.application.secrets.secret_login && password == Rails.application.secrets.secret_login_pwd
      end
end
private
  def survey_params
    params.require(:survey).permit(:ip_adress, :user_agent, :q3, :q1, :q5, :q12, :q16, :q17, :q17b, :q19, :q20, :q21, :q22, :q23, :q24, :q25, :q26, :q27,:q28, :q29, q2: params[:survey][:q2].try(:keys),q4: params[:survey][:q4].try(:keys), q5: params[:survey][:q5].try(:keys), q6: params[:survey][:q6].try(:keys), q7: params[:survey][:q7].try(:keys), q8: params[:survey][:q8].try(:keys), q9: params[:survey][:q9].try(:keys), q10: params[:survey][:q10].try(:keys), q101: params[:survey][:q101].try(:keys), q11: params[:survey][:q11].try(:keys), q12a: params[:survey][:q12a].try(:keys), q13: params[:survey][:q13].try(:keys), q14: params[:survey][:q14].try(:keys), q15: params[:survey][:q15].try(:keys), q17a: params[:survey][:q17a].try(:keys),q22a: params[:survey][:q22a].try(:keys))
  end
end