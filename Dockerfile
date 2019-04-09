FROM ruby:2.6.2
RUN apt-get update && apt-get install -y build-essential libpq-dev
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
RUN mkdir -p /wheel
WORKDIR /wheel
ADD . /wheel
RUN bundle install
CMD /wheel/setup_while_container_init.sh
