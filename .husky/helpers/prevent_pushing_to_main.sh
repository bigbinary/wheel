#!/bin/sh

prevent_pushing_to_main() {
  current_branch=`git symbolic-ref HEAD`
  current_origin=`git remote`
  if [ current_origin = "origin" -o "$current_branch" = "refs/heads/master" -o "$current_branch" = "refs/heads/main" ]
  then
  cat <<EOT
======================================================================================
You are not authorized to push/commit directly to master/main branch in origin remote.
Push from a new branch and make the PR.

Or if you are 100% sure you want to push/commit to master/main branch,
then pass in the optional --no-verify option with the git command.

Example:
# Warning: pushing to master is not recommended
git push origin main --no-verify
======================================================================================
EOT
    echo "";
    exit 1;
  fi
}
