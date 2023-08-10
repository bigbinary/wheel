# frozen_string_literal: true

class BaseWorker
  include Sidekiq::Worker

  def perform
    # Remove this base worker if there's nothing common between the workers that you are creating
    # Else keep common logic here
  end
end
