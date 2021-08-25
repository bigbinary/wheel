# frozen_string_literal: true

class CypressRunsWorker < BaseWorker
  def perform(url)
    super()

    `CYPRESS_baseUrl=#{url} npx cypress run --record --key #{Rails.application.secrets.cypress[:record_key]}`
  end
end
