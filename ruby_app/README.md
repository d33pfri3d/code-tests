# SmartPension Technical Task

Task : Write a ruby script that recieves a log as an argument `./parser.rb webserver.log` and returns a list with the most page views ordered from most to least.

## Initial thougths

Initially written as a single script that does as expected and try to use as few external dependencies unless really required and then divided into

## Future improvements

More testing around the other functions, reporting, parser and cache.

There is an error that I wasn't able to solve with IO foreach, I believe that its due to this current open issue -- https://bugs.ruby-lang.org/issues/15576 -- could spend time resolving it, or backdown to ruby 2.5.

## Testing

`rspec included, few tests`

## Running this script

Install rspec `bundle install`

We need to make the script executable.

`chmod +x ./parser.rb` will take care of that.

Then you can run the script with `./parser.rb webserver.log`
