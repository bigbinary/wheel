# This code automatically fires background job worker in heroku even if there
# is no explicit worker. This is ok for one-off feature branches. For real staging
# and production environment real worker should be used.
#
# Presence of ENV['APP_URL'] indicates real staging and real production instance in our setting.
# For this feature to work ensure that ENV['INVOKE_WORKER_AUTOMATICALLY'] is set to 'enabled'.

unless ENV['APP_URL']

  # $PROGRAM_NAME check is needed here to successfully run migrations
  if !($PROGRAM_NAME =~ /(rake)(.rb)?$/) &&
     ENV['INVOKE_WORKER_AUTOMATICALLY'] &&
     ENV['INVOKE_WORKER_AUTOMATICALLY'] == 'enabled'

    pid = spawn('INVOKE_WORKER_AUTOMATICALLY=disabled TRAP_SIGNALS=true bundle exec rake jobs:work')
    Process.detach(pid)
  end

end
