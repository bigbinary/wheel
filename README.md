[![Circle CI](https://circleci.com/gh/bigbinary/wheel.png?style=badge)](https://circleci.com/gh/bigbinary/wheel)

#### Setup

```
rake setup
bundle exec rails server
```

#### Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to
replace all occurrences of `Wheel` with `Pump`.

```
 perl -e "s/Wheel/Pump/g;" -pi $(find . -type f)
```

#### Features

- Uses [Boostrap](http://getbootstrap.com) .
- rake setup to set sensible sample data including user `sam@example.com` with password `welcome`.
- Uses [devise](https://github.com/plataformatec/devise) .
- Heroku ready. Push to heroku and it will work .
- Uses [honeybadger](https://www.honeybadger.io) .
- Built in superadmin feature .
- Uses modal box to showcase an example of editing information using modal box.
- Enables __strict mode__ for all JavaScript code.
- Uses __unicorn__ for staging and production.
- Uses __thin__ for development and test.
- An orange ribbon at the top for non-production environment.
- Uses haml for cleaner syntax over erb.
- No coffeescript. We prefer JavaScript.
- No turbo-link.
- Uses [ActiveAdmin](http://activeadmin.info) .
- When exception is sent to honeybadger then uuid is also sent for [debugging](http://videos.bigbinary.com/rubyonrails/use-uuid-x-request-id-to-debug-rails-application.html) .
- Uses [DelayedJob](https://github.com/collectiveidea/delayed_job) .
- Intercepts all outgoing emails in non production environment and forwards those email to a chosen email address.
- Uses [CircleCI](https://circleci.com) for continuous testing.
- Has a bunch of tests to make it easier to get started with new tests.
- Uses PostgreSQL.
- Built in support for [carrierwave](https://github.com/carrierwaveuploader/carrierwave) to easily upload items to s3.
- Built in support for "variants" so the pages can be customzied for tablet or phone easily.
- Uses [simple_form](https://github.com/plataformatec/simple_form) .
- Built in support for [mandrill](http://how-we-work.bigbinary.com/externalservices/mandrill.html) .
- Easy to generate "test coverage" .
- Built in support for [email prefixing](http://codecrate.com/2015/01/email-prefixer-release.html)


#### Brought to you by


![BigBinary](http://bigbinary.com/assets/common/logo.png)
