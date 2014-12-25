unless Rails.env.development?
  Rails.application.config.middleware.insert_before ActionDispatch::ParamsParser, "CatchJsonParseErrors"
end
