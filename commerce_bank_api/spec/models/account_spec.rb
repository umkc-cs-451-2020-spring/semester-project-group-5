require 'rails_helper'

RSpec.describe Account, type: :model do
  # Validate that the account cannot drop below 0
  # Validate that the account cannot go about 1,000,000
  # Validate that an account number is generated prior to validation
  user = User.create(
    username: 'michaelscott',
    email: 'michalscott@theoffice.com',
    first_name: 'Michael',
    last_name: 'Scott',
    password: 'Parkor12!',
    state:    'CA')

  subject { Account.new(name: 'Primary Savings', user: user) }

  describe 'Validations' do
    it { should validate_presence_of(:name) }

    it 'cannot have a balance lower than 0' do
      subject.balance = -1.0
      expect(subject).to_not be_valid
    end

    it 'cannot have a balance greater than 1_000_000' do
      subject.balance = 1_000_001
      expect(subject).to_not be_valid
    end

    it 'is valid with name' do
      expect(subject).to be_valid
    end
  end

  describe 'Callbacks' do
    it 'Generates an account number on creation' do
      subject.save
      expect(subject.account_number).to_not be_nil
    end
  end

  describe 'Associations' do
    it { should belong_to(:user) }
  end
end
