require 'rails_helper'

RSpec.describe User, type: :model do
  # TODO:
  # Validate same username can't exist
  # Validate same email can't exist
  # Validate password gets hashed
  # Validate a user can be logged in
  # Validate User's home state

  let(:username)   {'michaelscott'}
  let(:email)      {'michalscott@theoffice.com'}
  let(:first_name) {'Michael'}
  let(:last_name)  {'Scott'}
  let(:password)   {'Parkor12!'}
  let(:state)      {'CA'}

  describe 'Validate User' do
    subject {
      User.new(
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password_confirmation: password,
        state: state
    )}

    it 'is valid with valid fields' do
      expect(subject).to be_valid
    end

    it 'is not valid with an invalid password' do
      subject.password = 'invalid'
      subject.password_confirmation = 'invalid'
      expect(subject).to_not be_valid
    end

    it 'is not valid with invalid email' do
      subject.email = 'invalidemail'
      expect(subject).to_not be_valid
    end

    it 'is not valid with non-us state' do
      subject.state = 'UK'
      expect(subject).to_not be_valid
    end
  end

  describe 'After Creation' do
    subject { 
      User.create(
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
        password_confirmation: password,
        state: state
    )}

    it 'has a salted password' do
      expect(subject.password_digest).to_not eq(password)
    end

    it 'allows a user to log in' do
      expect(subject.authenticate(password)).to eq(subject)
    end
  end
end
