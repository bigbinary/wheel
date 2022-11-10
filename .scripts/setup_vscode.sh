#!/usr/bin/env ruby

require "json"

def which(cmd)
  exts = ENV['PATHEXT'] ? ENV['PATHEXT'].split(';') : ['']
  ENV['PATH'].split(File::PATH_SEPARATOR).each do |path|
    exts.each do |ext|
      exe = File.join(path, "#{cmd}#{ext}")
      return exe if File.executable?(exe) && !File.directory?(exe)
    end
  end
  nil
end

code_file_location = which("code")
code_insiders_file_location = which("code-insiders")

if code_file_location.nil? && code_insiders_file_location.nil?
  puts "Couldn't find an executable for VSCode. Please ensure that the code or code-insiders command is available in your PATH env"
  return
end

config = `curl -s 'https://raw.githubusercontent.com/bigbinary/wheel/main/.vscode/extensions.json'`
extensions = JSON.parse(config)["recommendations"]

extension_installation_command = code_file_location.nil? ? "code-insiders --install-extension" : "code --install-extension"

extensions.each do |extension|
  puts `#{extension_installation_command} #{extension}`
end
