
module CommerceBankErrors
  extend ActiveSupport::Concern

  class UnauthenticatedUserError < StandardError; end
  class UnauthorizedUserError < StandardError; end
end