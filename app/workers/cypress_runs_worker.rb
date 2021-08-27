# frozen_string_literal: true

class CypressRunsWorker < BaseWorker
  def perform(url)
    super()

    record_key = Rails.application.secrets.cypress[:record_key]
    `CYPRESS_baseUrl=#{url} npx cypress run --project ./cypress-tests --record --key #{record_key}`
  end
end
