class Superadmin::UsersController < Superadmin::BaseController

  def index
    @users = User.order('id desc')
  end

end
