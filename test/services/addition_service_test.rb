# frozen_string_literal: true

require "test_helper"

class AdditionServiceTest < ActiveSupport::TestCase
  def test_addition
    service = AdditionService.new 5, 10
    assert_equal 15, service.process
  end
end
