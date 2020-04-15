class LoginHistory < ApplicationRecord
    belongs_to :user

    # Maybe later on this model will hold more useful information, but for right now
    # it only serves as a means of recording the last time and location of a login
end
