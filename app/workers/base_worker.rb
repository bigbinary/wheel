class BaseWorker

  def perform
    Honeybadger.context(job_name: self.class.name, app_name: Settings.app_name)
  end

end
