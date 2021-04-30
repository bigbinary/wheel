[![Semaphore CI](https://bigbinary.semaphoreci.com/badges/wheel.svg)](https://bigbinary.semaphoreci.com/projects/wheel)

Made by the team at [BigBinary](https://bigbinary.com), this is a base project to quickly spin up a
Rails application built with opinions of BigBinary style of working.

## Local Development Setup

Install the latest [Node.js](https://nodejs.org) version.
Make sure that [npm](https://www.npmjs.com/) is installed with it as well.

```
./bin/setup
```

Start the server by executing following command.

```
bundle exec rails server
```

Visit http://localhost:3000 and login with email `oliver@example.com` and password `welcome`.

## Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to
replace all occurrences of `Wheel` with `Pump`.

```
perl -pi -w -e 's/Wheel/Pump/g;' $(git ls-files)
perl -pi -w -e 's/wheel/Pump/g;' $(git ls-files)
```

## Features

* Uses [Tailwind CSS](https://tailwindcss.com).
* `rake setup` to set sensible sample data including user `oliver@example.com` with password `welcome`.
* Uses [devise](https://github.com/plataformatec/devise).
* Heroku ready. Push to Heroku and it will work.
* Uses [Honeybadger](https://www.honeybadger.io/).
* Uses slim for cleaner syntax over erb and better performance over haml.
* Uses [ActiveAdmin](http://activeadmin.info).
* Uses [Sidekiq](https://github.com/mperham/sidekiq).
* Intercepts all outgoing emails in non production environment using gem [mail_interceptor](https://github.com/bigbinary/mail_interceptor).
* Uses [SemaphoreCI](https://semaphoreci.com/) for continuous testing.
* Uses PostgreSQL.
* Content compression via [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb).
* Auto-formats Ruby code with [rubocop](https://github.com/bbatsov/rubocop).
* Auto-formats JavaScript and CSS code with [prettier](https://github.com/prettier/prettier).
* Performs background job processing "inline" for heroku env. It means heroku can deliver emails.
* Letter opener gem for development.


## Checklist

For this checklist we will assume that the name of the application is `timbaktu` and 
the name of the repo is `timbaktu-web`.

- [ ] Create a new repo called `timbaktu-web`.
- [ ] Push wheel code to the new repo.
- [ ] In Heroku build and deploy application named `timbaktu-web-staging`.
- [ ] Create a new virtual credit card for this project using [Brex](https://www.brex.com/).This step is specific to BigBinary. Ask Neeraj to do it.
- [ ] Signup for a free [honeybadger.io account](https://www.honeybadger.io/).
- [ ] Update `config/honeybadger.yml` with the honeybadger key
- [ ] Setup Heroku Review and a team.
- [ ] Signup for Semaphore CI.
- [ ] Update semaphore CI badge in README.
- [ ] Configure Honeybadger to automatically create issues in Github.


## Push Wheel code to the new repo

```
git clone git@github.com:bigbinary/wheel.git
mv wheel timbaktu-web
cd timbaktu-web
```
Open `.git/config` file.

```
code .git/config
```

Change `bigbinary/wheel.git` to  `bigbinary/timbaktu-web.git` and save the file.

```
git push origin master
```

## Deploying application to Heroku

- [ ] Login to heroku and click on "New" at the top right corner.
- [ ] Name of the application should be "#{reponame}-staging". In this case it would be `timbaktu-web-staging`.
- [ ] Click on "Deploy" tab and then click on "Github" tab. 
- [ ] You will see a dropdown with the label "Searh for a repository to connect to". Select BigBinary in the dropdown.
- [ ] Put "timbaktu-web-staging" in the app. Connect the app.
- [ ] Scroll to the bottom of the page and click on button "Deploy Branch". 
- [ ] Wait and do not do anything until deployment is complete.
- [ ] Click on tab "Settings".
- [ ] Click on link "Reveal Config Vars".
- [ ] Change `RAILS_ENV` and `RACK_ENV` to `staging`.
- [ ] Install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli).
- [ ] Execute command `heroku run rake populate_sample_data -a timbaktu-web-staging` to populate sample data in the staging application.
- [ ] Now you should be able to login to the deployed application.
- [ ] Click on tab "Resources".
- [ ] Click on "Change Dyno Type".
- [ ] Select "Hobby" plan.
- [ ] If you need to enable sidekiq worker then enable that also.

## Creating Heroku pipeline

* Click on Personal at the top left corner.
* Click on "New pipeline" a the top right corner
* Pipeline name should be "#{reponame}-pipeline". In this case it would be `timbaktu-web-pipeline`.
* In the "Staging" column click on "Add app" and select `timbaktu-web-staging`.
* Click on "Enable Review Apps" button.
* Check "Create new review apps for new pull requests automaticallY'
* Check "Destroy stale review apps automatically". In the dropdown select "After 5 Days". 
* We are not using Heroku CI so leave CI unchecked.
* Click on "Enable review apps" button.
* Click on "Configure" link.
* Click on "More settings".
* Click on button "Update URL pattern".
* Ensure that "Predictable" radio button is selected.
* In the Unique Identifier put ther reponame which in this case would be "timbaktu-web".
* Click on "Update URL pattern"

## Creating Heroku team

* Click On "Personal".
* In the pull down there you will have an option to create a new team. Click on that.
* Team name should "reponame-team". In this case it would be "lexcel-web-team".
* Click on "Add credit card".
* Now click on "Transfer existing app". Select "lexcel-web-staging".
* Invite other team members to the team. Make everyone "Admin"
* Click on Person. Go to the pipeline. Go to settings. Scroll to the to bottom. Select "timbaktu-web-team" in the "Choose a pipeline owner".


## Heroku Review

[Heroku Review](https://devcenter.heroku.com/articles/github-integration-review-apps)
is enabled on this application. It means when a PR is sent then Heroku
automatically deploys an application for that branch.


## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

wheel is maintained by [BigBinary](https://www.BigBinary.com). BigBinary is a software consultancy company. We build web and mobile applications using Ruby on Rails, React.js, React Native and Node.js.

