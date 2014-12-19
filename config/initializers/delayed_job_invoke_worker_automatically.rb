# This code automatically fires background job worker in heroku even if there
# is no explicit worker. This technique works ok for non production branches. For production
# instance use a dedicated worker provided by heroku ( it costs money ).
#
# This feature should not be confused with `worker: bundle exec rake jobs:work` entry in the `Procfile`.
# If a heroku instance does not have any worker then that entry in the `Procfile` will not do anything.
# The technique employed here spawns a new process from the dyno process and that spawned process
# acts like a background job processor.
#
# For this feature to work ensure that ENV['INVOKE_WORKER_AUTOMATICALLY'] is set to 'enabled' in feature
# branches. In production environemnt either do not have ENV['INVOKE_WORKER_AUTOMATICALLY'] entry or
# if you have an entry then set the value to 'disabled`.


# We try not to make code behave differently depending on Rails environemt but this is an exception.
unless Rails.env.production?

  # $PROGRAM_NAME check is needed here to successfully run migrations
  if !($PROGRAM_NAME =~ /(rake)(.rb)?$/) &&
     ENV['INVOKE_WORKER_AUTOMATICALLY'] &&
     ENV['INVOKE_WORKER_AUTOMATICALLY'] == 'enabled'

    pid = spawn('INVOKE_WORKER_AUTOMATICALLY=disabled TRAP_SIGNALS=true bundle exec rake jobs:work')
    Process.detach(pid)
  end

end
