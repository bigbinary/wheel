[![Circle CI](https://circleci.com/gh/bigbinary/wheel.png?style=badge)](https://circleci.com/gh/bigbinary/wheel)

Made by the team at [BigBinary](https://bigbinary.com), this is a base project to quickly spin up a
Rails application built with opinions of BigBinary style of working.

## Local Development Setup

Install the latest [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.

```
bundle install
bundle exec rake setup
bin/yarn
bundle exec rails server
```

Visit http://localhost:3000 and login with email sam@example.com and password welcome.

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
* Uses slim for cleaner syntax over erb and better performance over haml.
* No coffeescript. We prefer JavaScript.
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


## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

wheel is maintained by [BigBinary](https://www.BigBinary.com). BigBinary is a software consultancy company. We build web and mobile applications using Ruby on Rails, React.js, React Native and Node.js .
