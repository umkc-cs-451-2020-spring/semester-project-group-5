class ApplicationController < ActionController::API
  include Serializers
  include Utils
  include CommerceBankErrors

  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  rescue_from CommerceBankErrors::UnauthenticatedUserError, with: :unauthenticated
  rescue_from CommerceBankErrors::UnauthorizedUserError, with: :unauthorized

  def invalid_record(exception)
    render_json(
      message: 'Validation Failed',
      errors: exception.record.errors,
      status: :unprocessable_entity
    )
  end

  def not_found(exception)
    render_json error: "Not Found", status: :not_found #404
  end

  # :unauthorized returns error code 401 which means the user has not been authenticated
  def unauthenticated
    render_json status: :unauthorized
  end

  # :forbidden returns error code 403 which means the user has been authenticated but is not
  # authorized to view the requested resource
  def unauthorized
    render_json error: 'Access Not Authorized', status: :forbidden
  end
end
