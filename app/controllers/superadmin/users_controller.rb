class Superadmin::UsersController < Superadmin::BaseController

  before_action :load_user, only: [:edit, :update]

  def index
    @users = User.order('id desc')
  end

  def edit
    @user_name = @user.name

    render partial: 'edit_modal'
  end

  def update
    @user_name = @user.name
    @user.update(user_params)
    if @user.valid?
      flash[:notice] = "Information for user #{@user.name} successfully updated!"
      render json: { redirect_to: superadmin_users_path }
    else
      render json: { modal_content: render_to_string(partial: 'edit_modal') }
    end
  end

  private

  def load_user
    @user ||= User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :profile_image, :email)
  end

end
