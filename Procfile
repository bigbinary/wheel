web: bundle exec puma -C config/puma.rb
worker: bundle exec sidekiq -C config/sidekiq.yml
release: bundle exec rake db:migrate && bundle exec rake reset_and_populate_sample_data