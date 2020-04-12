module Utils
  extend ActiveSupport::Concern

  def current_user
    @current_user ||= session[:current_user_id] and User.find(session[:current_user_id])
  end

  # Checks to see if the user is both logged in, and if they are authroized access
  def authorize!
    raise CommerceBankErrors::UnauthenticatedUserError unless current_user
    raise CommerceBankErrors::UnauthorizedUserError unless current_user.id == params[:user_id].to_i
  end

  def render_json(fields={})
    render json: fields, status: fields[:status]
  end

  def render_as_json(obj, additional_fields={})
    if obj.is_a? Hash
      resp = obj
    elsif obj.respond_to?(:to_h)
      resp = obj.to_h
    elsif obj.respond_to?(:as_json)
      resp = obj.as_json
    end

    resp = resp.merge(additional_fields)
    render json: resp, status: additional_fields[:status] || :ok
  end
end