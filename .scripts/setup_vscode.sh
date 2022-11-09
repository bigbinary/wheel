#!/usr/bin/env ruby

require "json"

code_file_location = `which codes`
code_insiders_file_location = `which code-insiders`

if code_file_location.empty? && code_insiders_file_location.empty?
  puts "Couldn't find an executable for VSCode. Please ensure that the code or code-insiders command is available in your PATH env"
  return
end

config = `curl -s 'https://raw.githubusercontent.com/bigbinary/wheel/main/.vscode/extensions.json'`
extensions = JSON.parse(config)["recommendations"]

extensions.each do |extension|
  output = code_file_location.empty? ? `code-insiders --install-extension #{extension}` : `code --install-extension #{extension}`
  puts output
end
