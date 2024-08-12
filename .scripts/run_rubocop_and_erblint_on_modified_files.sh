git fetch --unshallow 2> /dev/null
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch origin main

CHANGED_FILES=$(git diff-tree --diff-filter=a -r --no-commit-id --name-only HEAD remotes/origin/main)

if [ -n "$CHANGED_FILES" ]; then
  echo "$CHANGED_FILES" | xargs bundle exec rubocop --force-exclusion
else
  echo "No file changes detected. Skipping RuboCop."
fi

