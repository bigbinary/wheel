# as per https://github.com/jsuder/sprockets-strict-mode
Rails.application.assets.register_postprocessor('application/javascript', Sprockets::StrictMode)
