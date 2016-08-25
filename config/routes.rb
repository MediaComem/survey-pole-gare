Rails.application.routes.draw do
	get '/surveys/admin(.:format)', to: 'surveys#admin', as: 'survey_admin'
  resources :surveys
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
