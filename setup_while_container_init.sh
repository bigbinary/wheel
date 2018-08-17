#!/usr/bin/env bash
cd /wheel
bundle install
bundle exec rake setup
web
{
bundle exec rake setup
rm tmp/pids/server.pid || true
RAILS_ENV=$APP_ENV bundle exec rails server -p 80 -b 0.0.0.0
}
delayed_job
{
bundle exec
}

case $POD_TYPE in
  "WEB" )
   web
   ;;
  "websocket" )
   web
   ;;
  "background" )
   background
   ;;
  "cron_job" )
   cron_job
   ;;
  "rails_console" )
   rails_console
   ;;
  * )
   echo "Unknown POD_TYPE"
   ;;
esac
