checkout
git fetch --unshallow 2> /dev/null
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch origin master
git diff-tree --diff-filter=a -r --no-commit-id --name-only HEAD remotes/origin/master | grep --color=none -i -e "\.js$" -e "\.jsx$" | xargs npx eslint
