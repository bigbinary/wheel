[![Circle CI](https://circleci.com/gh/bigbinary/wheel.png?style=badge)](https://circleci.com/gh/bigbinary/wheel)

#### Setup

```
bundle install
cp config/database.yml.postgresqlapp config/database.yml
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

- Uses [Bootstrap](http://getbootstrap.com) .
- rake setup to set sensible sample data including user `sam@example.com` with password `welcome`.
- Uses [devise](https://github.com/plataformatec/devise) .
- Heroku ready. Push to heroku and it will work .
- Uses [honeybadger](https://www.honeybadger.io).
- Built in superadmin feature.
- Uses modal box to showcase an example of editing information using modal box.
- Enables __strict mode__ for all JavaScript code.
- Uses __puma__ as web server.
- An orange ribbon at the top for non-production environment.
- Uses haml for cleaner syntax over erb.
- No coffeescript. We prefer JavaScript.
- No turbo-link.
- Uses [ActiveAdmin](http://activeadmin.info).
- When exception is sent to honeybadger then uuid is also sent for [debugging](http://videos.bigbinary.com/rubyonrails/use-uuid-x-request-id-to-debug-rails-application.html) .
- Uses [DelayedJob](https://github.com/collectiveidea/delayed_job).
- Intercepts all outgoing emails in non production environment using gem [mail_interceptor](https://github.com/bigbinary/mail_interceptor).
- Uses [CircleCI](https://circleci.com) for continuous testing.
- Has a bunch of tests to make it easier to get started with new tests.
- Uses PostgreSQL.
- Built in support for [carrierwave](https://github.com/carrierwaveuploader/carrierwave) to easily upload items to s3.
- Built in support for "variants" so the pages can be customized for tablet or phone easily.
- Uses [simple_form](https://github.com/plataformatec/simple_form).
- Built in support for [mandrill](http://how-we-work.bigbinary.com/externalservices/mandrill.html).
- Easy to generate "test coverage".
- Content compression via [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb).


#### Brought to you by

[![BigBinary logo](http://bigbinary.com/assets/common/logo.png)](http://BigBinary.com)
