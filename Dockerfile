FROM ruby:2.4.1
RUN apt-get update && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir -p /wheel
WORKDIR /wheel
ADD . /wheel
RUN bundle install
