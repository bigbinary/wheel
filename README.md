![circleci image](https://circleci.com/gh/bigbinary/wheel.png?circle-token=7bb42337cdade1b80439ab4c0238c0893488620f)

### Setup

```
rake setup
bundle exec rails server
```

### Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to
replace all occurrences of `Wheel` with `Pump`.

```
 perl -e "s/Wheel/Pump/g;" -pi $(find . -type f)
```

### Instructions

 - [How we work](http://how-we-work.bigbinary.com/)
