# frozen_string_literal: true

class Api::V1::CypressRunsController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  # before_action :verify_authorization_token

  def create
    CypressRunsWorker.perform_async(params[:app_url])

    head :ok
  end

  private

    def verify_authorization_token
      cypress_auth_token = cypress_secrets[:auth_token]

      authenticate_or_request_with_http_token do |token, _options|
        ActiveSupport::SecurityUtils.secure_compare(token, cypress_auth_token)
      end
    end

    def cypress_secrets
      @_cypress_secrets ||= Rails.application.secrets.cypress
    end
end
