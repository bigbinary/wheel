#!/bin/sh

set -e
echo "ENVIRONMENT: $RAILS_ENV"

# remove any existing pid file
rm -f $APP_PATH/tmp/pids/server.pid

database_config_path="$APP_PATH/config/database.yml"

if [ ! -f "$database_config_path" ]; then
  cp $APP_PATH/config/database.yml.postgresql "$database_config_path"
fi

# append bundle exec to every command
bundle exec ${@}
