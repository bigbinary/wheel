Made by the team at [Neeto](https://neeto.com), this is a base project
to quickly spin up a Rails application built with opinions of BigBinary style of
working.

## Local Development Setup

First clone this repo.

Then install the [Node.js](https://nodejs.org) version `v18.12` which we have specified inside the `.node-version` file of this repo., using the following command:

```bash
nvm install
```

Make sure that [yarn](https://yarnpkg.com) is installed with it as well in your
system.

After `yarn` is installed, install the Node.js and Rails dependencies and also
seed the database, by running:

```bash
./bin/setup
```

Start the server by executing following command.

```bash
bundle exec rails server -p 3000
```

Visit http://localhost:3000 and login with email `oliver@example.com` and
password `welcome`.

## Using docker for development

In BigBinary we follow the above mentioned style of installing dependencies using `./bin/setup` and then running the servers manually.
If that doesn't work in your system for some reason, then you can opt into following the instructions mentioned
[here](https://github.com/bigbinary/wheel/blob/main/docs/using_docker.md) to use
docker for development.

## Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to replace
all occurrences of `Wheel` with `Pump`.

```bash
perl -pi -w -e 's/Wheel/Pump/g;' $(git ls-files)
```

## Features

- Uses [Tailwind CSS](https://tailwindcss.com).
- `rake setup` to set sensible sample data including user `oliver@example.com`
  with password `welcome`.
- Uses [devise](https://github.com/plataformatec/devise).
- Uses [Honeybadger](https://www.honeybadger.io/).
- Uses slim for cleaner syntax over erb and better performance over haml.
- Uses [ActiveAdmin](http://activeadmin.info).
- Uses [Sidekiq](https://github.com/mperham/sidekiq).
- Intercepts all outgoing emails in non production environment using gem
  [mail_interceptor](https://github.com/bigbinary/mail_interceptor).
- Uses [SemaphoreCI](https://semaphoreci.com/) for continuous testing.
- Uses PostgreSQL.
- Content compression via
  [Rack::Deflater](https://github.com/rack/rack/blob/main/lib/rack/deflater.rb).
- Auto-formats Ruby code with [rubocop](https://github.com/bbatsov/rubocop).
- Auto-formats JavaScript and CSS code with
  [prettier](https://github.com/prettier/prettier).
- Letter opener gem for development.

## neetoDeploy Review

[neetoDeploy Review](https://www.neeto.com/neetodeploy) is enabled on this application. Thus all PRs will have a review
app and once the PR is merged to main, it will be deployed to production instance. The neetoDeploy instance for Wheel
is hosted in `neeto-engineering` organization.

## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

wheel is maintained by [BigBinary](https://www.bigbinary.com). BigBinary is a
software consultancy company. We build web and mobile applications using Ruby on
Rails, React.js, React Native and Node.js.
