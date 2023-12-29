#!/bin/sh

run_install_commands() {
  if [ "$SKIP_INSTALL_COMMANDS_AFTER_PULL" == "true" ]; then
      cat <<EOT
--------------------------------------------------------------------------------------
Environment variable SKIP_INSTALL_COMMANDS_AFTER_PULL is set to true.

You need to run yarn install and bundle install manually, to install dependencies.
--------------------------------------------------------------------------------------
EOT
  else
    changed_files=$(git diff-tree --name-only --no-commit-id ORIG_HEAD HEAD)

    if grep -q "yarn.lock" <<< "$changed_files" && grep -q "Gemfile.lock" <<< "$changed_files"; then
      echo "== Executing yarn install and bundle install =="
      (trap 'kill 0' SIGINT; yarn install & bundle install & wait)
    elif grep -q "yarn.lock" <<< "$changed_files"; then
      echo "== Executing yarn install =="
      yarn install
    elif grep -q "Gemfile.lock" <<< "$changed_files"; then
      echo "== Executing bundle install =="
      bundle install
    fi
  fi
}
