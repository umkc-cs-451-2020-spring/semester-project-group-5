class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:current_user_id] = user.id
      render_json user: user, status: :created
    else
      render_json status: :unauthorized
    end
  end
end
