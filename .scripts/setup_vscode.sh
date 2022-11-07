#!/usr/bin/env ruby

require "json"

config = `curl -s 'https://raw.githubusercontent.com/bigbinary/wheel/main/.vscode/extensions.json'`
# echo $extensions
extensions = JSON.parse(config)["recommendations"]

extensions.each do |extension|
  output = `code --install-extension #{extension}`
  puts output
end
