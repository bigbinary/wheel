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

## Replace Wheel with your project name

Let's say that the project name is `Pump`. Execute the command below to replace
all occurrences of `Wheel` with `Pump`.

```bash
perl -pi -w -e 's/Wheel/Pump/g;' $(git ls-files)
perl -pi -w -e 's/wheel/Pump/g;' $(git ls-files)
```
