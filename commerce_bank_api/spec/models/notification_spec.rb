require 'rails_helper'

RSpec.describe Notification, type: :model do
  # Validate that it belongs to a user
  # Validate that a message is generated

  it { should belong_to(:user) }
  it { should validate_presence_of(:message) }
end
