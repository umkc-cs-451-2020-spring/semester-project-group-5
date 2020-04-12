class UsersController < ApplicationController
  before_action :find_user, only: [:show, :update, :destroy]
  before_action :authorize!, except: [:index, :create]

  def create
    @user = User.create!(user_params)
    render_as_json user_serializer(@user), status: :created
  end

  def index
    @users = User.all.map { |u| user_serializer(u)}
    render_as_json users: @users
  end

  def show
    render_as_json user_serializer(@user)
  end

  def update
    @user.update!(user_params)
    head :no_content
  end

  def destroy
    @user.destroy!
    head :no_content
  end

  private
  def find_user
    @user = User.find(params[:user_id])
  end

  def user_params
    params.permit(
      :email,
      :first_name,
      :last_name,
      :username,
      :password,
      :state
    )
  end
end
