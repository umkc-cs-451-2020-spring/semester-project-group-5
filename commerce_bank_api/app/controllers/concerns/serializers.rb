module Serializers
  extend ActiveSupport::Concern

  def user_serializer(user)
    user.as_json(except: [:password_digest])
  end
end