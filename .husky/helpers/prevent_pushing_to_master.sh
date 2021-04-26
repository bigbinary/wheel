#!/bin/sh

prevent_pushing_to_master() {
  current_branch=`git symbolic-ref HEAD`
  if [ "$current_branch" = "refs/heads/master" -o "$current_branch" = "refs/heads/main" ]
  then
    echo "You are not authorized to push directly to master/main branch. Push from a new branch and make the PR.";
    exit 1;
  fi
}
