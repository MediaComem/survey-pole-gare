class SurveysController < ApplicationController
  def new
  end
  def create
  	render plain: params[:survey].inspect
	end
end
