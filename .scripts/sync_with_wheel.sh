# For executing this script, run the following from your terminal:
# curl -s -L "https://raw.githubusercontent.com/bigbinary/wheel/master/.scripts/sync_with_wheel.sh" | bash
yarn remove babel-eslint 2> /dev/null
yarn add -D @babel/eslint-parser
yarn add -D prettier
yarn add -D eslint \
eslint-plugin-react-hooks@4.2.1-alpha-13455d26d-20211104 \
eslint-plugin-import \
eslint-config-prettier \
eslint-plugin-prettier \
eslint-plugin-json \
eslint-plugin-react \
eslint-plugin-promise \
eslint-plugin-jam3 \
eslint-plugin-unused-imports \
prettier-plugin-tailwindcss

raw_base_url="https://raw.githubusercontent.com/bigbinary/wheel/main"
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
  ".husky/helpers/prevent_pushing_to_main.sh"
  ".husky/helpers/prevent_conflict_markers.sh"
  ".husky/pre-commit"
  ".husky/pre-push"
  ".semaphore/commands/run_eslint_on_modified_files.sh"
  ".node-version"
  ".nvmrc"
  ".ruby-version"
  ".erb-lint.yml"
  "bin/bundle"
  "bin/rails"
  "bin/rake"
  "bin/setup"
  "bin/update"
  "bin/webpacker"
  "bin/webpacker-dev-server"
  "bin/yarn"
)

for config in "${configs[@]}"; do
  echo "Downloading ${config}..."
  curl --create-dirs -o "${config}" "${raw_base_url}/${config}"
done
