# For executing this script, run the following from your terminal:
# curl -s -L "https://raw.githubusercontent.com/bigbinary/neetoui-challenge/master/.scripts/sync_with_neetoui-challenge.sh" | bash
yarn remove babel-eslint 2> /dev/null
yarn add -D @babel/eslint-parser
yarn add -D prettier
yarn add -D eslint \
eslint-plugin-react-hooks \
eslint-plugin-import \
eslint-config-prettier \
eslint-plugin-prettier \
eslint-plugin-json \
eslint-plugin-react \
eslint-plugin-promise \
eslint-plugin-jam3 \
eslint-plugin-cypress

raw_base_url="https://raw.githubusercontent.com/bigbinary/neetoui-challenge/master"
declare -a configs=(
  ".eslintrc.js"
  ".eslintignore"
  ".eslint-rules/helpers/index.js"
  ".eslint-rules/imports/enforced.js"
  ".eslint-rules/imports/order.js"
  ".eslint-rules/globals.js"
  ".eslint-rules/overrides.js"
  ".eslint-rules/promise.js"
  ".eslint-rules/react.js"
  ".rubocop.yml"
  ".prettierrc.js"
  ".editorconfig"
  ".vscode/extensions.json"
  ".vscode/settings.json"
  ".husky/helpers/lint_staged.sh"
  ".husky/helpers/prevent_pushing_to_master.sh"
  ".husky/pre-commit"
  ".husky/pre-push"
  "cypress-tests/.eslintrc.js"
  ".semaphore/commands/run_eslint_on_modified_files.sh"
  ".node-version"
  ".nvmrc"
  ".ruby-version"
)

for config in "${configs[@]}"; do
  echo "Downloading ${config}..."
  curl --create-dirs -o "${config}" "${raw_base_url}/${config}"
done
