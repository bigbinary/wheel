class LayoutCarrier

  def class_for_body
    if Rails.env.production?
      #noop
    else
      'orange_ribbon'
    end
  end

end
