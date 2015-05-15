class BaseWorker

  def perform
    Honeybadger.context(job_name: self.class.name, app_name: Rails.application.engine_name)
  end

end
