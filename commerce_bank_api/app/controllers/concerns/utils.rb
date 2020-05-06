module Utils
  extend ActiveSupport::Concern
  
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