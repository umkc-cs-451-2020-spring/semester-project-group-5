class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  def invalid_record(exception)
    render json: {
      message: 'Validation Failed', errors: exception.record.errors
      }, status: :unprocessable_entity 
  end

  def not_found
    render json: {error: "Not Found"}, status: :not_found #404
  end
end
