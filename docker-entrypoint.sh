#!/bin/sh

set -e
echo "ENVIRONMENT: $RAILS_ENV"

# remove any existing pid file
rm -f $APP_PATH/tmp/pids/server.pid

database_config_path="$APP_PATH/config/database.yml"

rm -f database_config_path
cp $APP_PATH/config/database.yml.docker "$database_config_path"

# append bundle exec to every command
bundle exec ${@}
