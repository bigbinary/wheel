class Superadmin::BaseController < ApplicationController

  before_action :ensure_current_user_is_superadmin!

  layout 'superadmin'

end
