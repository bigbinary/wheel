unless Rails.env.development?
  Rails.application.config.middleware.use CatchJsonParseErrors
end
