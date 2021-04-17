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

## Making new application out of wheel

I'm assuming that the name of the new application is timbaktu
and the name of the repo is timbaktu-web.

In github create a new repo called `timbaktu-web`.

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

## Heroku Review

[Heroku Review](https://devcenter.heroku.com/articles/github-integration-review-apps)
is enabled on this application. It means when a PR is sent then Heroku
automatically deploys an application for that branch.


## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

wheel is maintained by [BigBinary](https://www.BigBinary.com). BigBinary is a software consultancy company. We build web and mobile applications using Ruby on Rails, React.js, React Native and Node.js.
