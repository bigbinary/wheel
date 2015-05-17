# When a DelayedJob operation fails then honeybadger should collect
# contextual information like job name and the host.
class HoneybadgerDelayedJobPlugin < Delayed::Plugin
  callbacks do |lifecycle|
    lifecycle.before(:invoke_job) do |job, *args, &block|
      Honeybadger.context(job_name: job.name, host: Rails.application.secrets.host)
    end
  end
end

Delayed::Worker.plugins << HoneybadgerDelayedJobPlugin
