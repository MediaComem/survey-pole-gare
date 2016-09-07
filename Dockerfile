FROM ruby:2.3.1-onbuild
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
CMD bundle exec rails s -p 3000 -b '0.0.0.0'