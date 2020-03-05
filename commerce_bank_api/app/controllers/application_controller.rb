class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid do |e|
    record = e.record
    render json: {errors: record.errors.full_messages}, status: :unprocessable_entity
  end

  def not_found
    render json: {error: "Not Found"}, status: :not_found
  end
end
