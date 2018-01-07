[![Circle CI](https://circleci.com/gh/bigbinary/wheel.png?style=badge)](https://circleci.com/gh/bigbinary/wheel)

## TOC
* [About](#about)
* [Local Development Setup](#local-development-setup)
* [Running with Docker](#running-with-docker)
* [Replace wheel with your project name](#replace-wheel-with-your-project-name)
* [Features](#features)
* [Heroku Review](#heroku-review)

## About

This is a base project to quickly spin up a
Rails application which is built with
opinions of BigBinary team.

## Local Development Setup
Install the latest [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.

```
bundle install
cp config/database.yml.postgresqlapp config/database.yml
rake setup
bundle exec rails server
```
##  Running with Docker

### Pre-Requesites

Make sure you have [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

### Starting rails

```
docker-compose up
```

After the container is successfully created you should be able to access your app on `http://localhost:9000`

## Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to
replace all occurrences of `Wheel` with `Pump`.

```
perl -e "s/Wheel/Pump/g;" -pi $(find . -type f)
```

## Features

* Uses [Bootstrap](http://getbootstrap.com) .
* rake setup to set sensible sample data including user `sam@example.com` with password `welcome`.
* Uses [devise](https://github.com/plataformatec/devise) .
* Heroku ready. Push to heroku and it will work .
* Uses [Honeybadger](https://www.honeybadger.io/).
* Built in superadmin feature.
* Uses modal box to showcase an example of editing information using modal box.
* Enables __strict mode__ for all JavaScript code.
* Uses __puma__ as web server.
* Uses haml for cleaner syntax over erb.
* No coffeescript. We prefer JavaScript.
* Uses [turbolinks](https://github.com/turbolinks/turbolinks).
* Uses [ActiveAdmin](http://activeadmin.info).
* When exception is sent to Rollbar then uuid is also sent for [debugging](http://videos.bigbinary.com/rubyonrails/use-uuid-x-request-id-to-debug-rails-application.html) .
* Uses [DelayedJob](https://github.com/collectiveidea/delayed_job).
* Intercepts all outgoing emails in non production environment using gem [mail_interceptor](https://github.com/bigbinary/mail_interceptor).
* Uses [CircleCI](https://circleci.com) for continuous testing.
* Has a bunch of tests to make it easier to get started with new tests.
* Uses PostgreSQL.
* Built in support for [carrierwave](https://github.com/carrierwaveuploader/carrierwave) to easily upload items to s3.
* Built in support for "variants" so the pages can be customized for tablet or phone easily.
* Uses [simple_form](https://github.com/plataformatec/simple_form).
* Built in support for [Mailgun](http://mailgun.com).
* Easy to generate "test coverage".
* Content compression via [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb).
* Auto-formats Ruby code with [rubocop](https://github.com/bbatsov/rubocop).
* Auto-formats JavaScript and CSS code with [prettier](https://github.com/prettier/prettier).

## Heroku Review

[Heroku Review](https://devcenter.heroku.com/articles/github-integration-review-apps)
is enabled on this application. It means when a PR is sent then heroku
automatically deploys an application for that branch.


#### Brought to you by

<a href='http://BigBinary.com'><img src="https://github.com/bigbinary/bigbinary-assets/blob/press-assets/PNG/logo-light-square.png" width="200px"/></a>
