class Superadmin::BaseController < ApplicationController

  before_filter :ensure_current_user_is_superadmin!

  layout 'superadmin'

end
