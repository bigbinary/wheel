#!/usr/bin/env bash
cd /wheel
bundle install
web() {
  bundle exec rake setup
  rm tmp/pids/server.pid || true
  bin/yarn
  bundle exec rails server -p 80 -b 0.0.0.0
}
delayed_job() {
  bundle exec bin/delayed_job run
}
case $POD_TYPE in
  "WEB" )
   web
   ;;
  "background" )
   delayed_job
   ;;
  * )
   echo "Unknown POD_TYPE"
   ;;
esac
