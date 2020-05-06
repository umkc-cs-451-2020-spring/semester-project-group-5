module Auth
  extend ActiveSupport::Concern

  def current_user
    @current_user ||= session[:current_user_id] and User.find(session[:current_user_id])
  end

  # Checks to see if the user is both logged in, and if they are authroized access
  def authorize!
    raise CommerceBankErrors::UnauthenticatedUserError unless current_user
    raise CommerceBankErrors::UnauthorizedUserError unless current_user.id == resource_owner.id
  end

  # this function is designed to be overwritten by the including class
  # this tells the authorization function what user owns the given resource trying to be acessed
  # By default it is the user_id found in the url path, but not all paths have user_id in the url
  def resource_owner
    User.find(params[:user_id].to_i)
  end
end