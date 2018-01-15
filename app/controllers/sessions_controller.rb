# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  def destroy
    super
  end
end
