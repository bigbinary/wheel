require 'test_helper'

class AdditonServiceTest < ActiveSupport::TestCase

  def test_addition
    service = AdditionService.new 5, 10
    assert_equal 15, service.process
  end

end
