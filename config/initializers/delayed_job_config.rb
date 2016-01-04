Delayed::Worker.destroy_failed_jobs = false

# Amount of time to sleep when no jobs are found. You can easily set it to 5 seconds or less.
Delayed::Worker.sleep_delay         = 5

# If the work takes more than x minutes then DJ will abort
Delayed::Worker.max_run_time        = 5.minutes

Delayed::Worker.read_ahead          = 10

Delayed::Worker.delay_jobs          = !Rails.env.test?

if ENV['HEROKU'].present?
  Delayed::Worker.logger = Logger.new(STDOUT)
else
  Delayed::Worker.logger = Logger.new(File.join(Rails.root, 'log', 'delayed_job.log'))
end

if Delayed::Worker.delay_jobs && ($PROGRAM_NAME =~ /delayed_job/)
  ActiveRecord::Base.logger = Delayed::Worker.logger
  Rails.logger = Delayed::Worker.logger
end

# In production have default number of attempts ( which I think is 30 )
if !Rails.env.production?
  Delayed::Worker.max_attempts        = 3
end
