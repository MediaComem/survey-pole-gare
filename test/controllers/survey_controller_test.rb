require 'test_helper'

class SurveyControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get survey_new_url
    assert_response :success
  end

end
