git fetch --unshallow 2> /dev/null
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch origin main
new_files=$(git diff-tree --diff-filter=a -r --no-commit-id --name-only HEAD remotes/origin/main)
echo "$new_files" | xargs bundle exec rubocop --force-exclusion
echo "$new_files" | xargs bundle exec erblint --lint-all --format compact

