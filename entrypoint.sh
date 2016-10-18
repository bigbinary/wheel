#!/usr/bin/env bash
cd /wheel
bundle install
cp config/database.yml.docker config/database.yml
bundle exec rake setup
rm tmp/pids/server.pid || true
bundle exec rails server -p 9000 -b 0.0.0.0
