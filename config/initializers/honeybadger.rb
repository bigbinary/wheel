Honeybadger.configure do |config|
  config.api_key = Settings.honeybadger_api_key
end

# When a DelayedJob operation fails then honeybadger should collect
# contextual information like job name and the host.
class HoneybadgerDelayedJobPlugin < Delayed::Plugin
  callbacks do |lifecycle|
    lifecycle.before(:invoke_job) do |job, *args, &block|
      Honeybadger.context(job_name: job.name, host: Settings.host)
    end
  end
end

Delayed::Worker.plugins << HoneybadgerDelayedJobPlugin
