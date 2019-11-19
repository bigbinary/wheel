web:  bundle exec puma -C config/puma.rb
worker: bundle exec sidekiq -q default
release: bundle exec rake db:migrate
