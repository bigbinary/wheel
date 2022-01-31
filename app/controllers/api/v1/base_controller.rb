# frozen_string_literal: true

class Api::V1::BaseController < ApplicationController
  include ApiResponders
  include ApiRescuable
  include Authenticable

  respond_to :json
end
