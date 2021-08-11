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

## Docker for development environment

1. Clone this repo by running `git clone https://github.com/bigbinary/wheel.git`
2. `cd wheel`
3. If using it for the first time, run `docker-compose build` to build the images.
4. Run `docker-compose run --rm web bin/setup` to create and seed the database.
5. Run `docker-compose up` to start the application and get things up and running.
6. From now onwards, we can just run `docker-compose up` from within the root of the `wheel` directory to bring up the application.

### Fixing Docker Cache Issues
While re-building images, docker tries to find it's layers in the cache, which might bring-in stale layers.

#### Build images without using cache
```bash
# this forces docker to not use cached image layers
docker-compose build --no-cache
```

### Steps to remove docker data related to wheel:
- Run `docker ps -a | grep wheel` to get continers related to wheel, verify it and then run `docker rm -f $(docker ps -a | grep wheel | awk '{print $1}')` to delete them.

- Run `docker images | grep wheel` to get images related to wheel, verify it and then run `docker rmi -f $(docker images | grep wheel | awk '{print $3}')` to delete them.

- Run `docker volume ls | grep wheel` to get volumes related to wheel, verify it and then run `docker volume rm -f $(docker volume ls | grep wheel | awk '{print $2}')` to delete them.


If you want to try out something slightly more daring, yet effective, then run the following single line command to wipe all of the docker data, which includes containers+images+volumes and then did docker-compose up --build and things started working for me in wheel.

**Warning: The following command will wipe all of docker data of all local docker projects and containers:**

```bash
docker rm -f $(docker ps -a -q) && docker rmi -f $(docker images -q) && docker volume rm -f $(docker volume ls -q)

```

> **Warning:** <br/>
Run `docker system prune -a -f --volumes` to remove all containers, networks, images (both dangling and unreferenced), and volumes.

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


## Heroku Review

[Heroku Review](https://devcenter.heroku.com/articles/github-integration-review-apps)
is enabled on this application. It means when a PR is sent then Heroku
automatically deploys an application for that branch.


## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

wheel is maintained by [BigBinary](https://www.BigBinary.com). BigBinary is a software consultancy company. We build web and mobile applications using Ruby on Rails, React.js, React Native and Node.js.

