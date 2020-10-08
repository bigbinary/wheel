# frozen_string_literal: true

desc "Sets up the project by running migration and populating sample data"
task setup: [:environment, "db:drop", "db:create", "db:migrate"] do
  Rake::Task["setup_sample_data"].invoke unless Rails.env.production?
end

desc "Populates sample data without delete data"
task populate_sample_data: [:environment] do
  create_sample_data!
  puts "sample data has been added."
end

desc "Deletes all records and populates sample data"
task setup_sample_data: [:environment] do
  if Rails.env.production?
    puts "Skipping deleting and populating sample data"
  elsif Rails.env.staging?
    puts "Skipping deleting and populating sample data"
  else
    delete_all_records_from_all_tables
    Rake::Task["populate_sample_data"].invoke
  end
end

def delete_and_populate_sample_data
  delete_all_records_from_all_tables
end

def delete_all_records_from_all_tables
  Rake::Task["db:schema:load"].invoke
end

def create_sample_data!
  create_user! email: "oliver@example.com"
end

def create_user!(options = {})
  user_attributes = { password: "welcome",
                      first_name: "Oliver",
                      last_name: "Smith",
                      role: "super_admin" }
  attributes = user_attributes.merge options
  User.create! attributes
end