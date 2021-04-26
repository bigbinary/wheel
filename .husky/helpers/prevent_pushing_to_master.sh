#!/bin/sh

prevent_pushing_to_master() {
  current_branch=`git symbolic-ref HEAD`
  if [ "$current_branch" = "refs/heads/master" -o "$current_branch" = "refs/heads/main" ]
  then
    echo "Commit/Push to master/main branches are not allowed. Create a new branch and commit/push.";
    exit 1;
  fi
}
