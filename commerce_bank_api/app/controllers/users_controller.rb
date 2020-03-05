class UsersController < ApplicationController
  before_action :find_user, only: [:show, :update, :destroy]

  def create
    @user = User.create!(user_params)
    render json: @user, status: :created
  end

  def show
    render json: @user, status: :ok
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
    )
  end
end
