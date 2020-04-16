class LoginHistory < ApplicationRecord
    belongs_to :user

    # Maybe later on this model will hold more useful information, but for right now
    # it only serves as a means of recording the last time and location of a login.
    # There is currently no validation on this model whatsoever, normally I would take the time
    # but fuck, I just need to get this done
end
