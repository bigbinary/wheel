# For executing this script, run the following from your terminal:
# curl -s -L "https://raw.githubusercontent.com/bigbinary/wheel/master/.scripts/sync_with_wheel.sh" | bash
yarn add -D prettier
yarn add -D eslint \
babel-eslint \
eslint-plugin-react-hooks \
eslint-plugin-import \
eslint-config-prettier \
eslint-plugin-prettier \
eslint-plugin-json \
eslint-plugin-react \
eslint-plugin-promise \
eslint-plugin-jam3

raw_base_url="https://raw.githubusercontent.com/bigbinary/wheel/master"
declare -a configs=(
  ".eslintrc.js"
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
)

for config in "${configs[@]}"; do
  echo "Downloading ${config}..."
  curl --create-dirs -o "${config}" "${raw_base_url}/${config}"
done
