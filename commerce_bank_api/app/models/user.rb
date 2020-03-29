class User < ApplicationRecord
  include States
  has_secure_password

  validates_presence_of :last_name, :first_name, :state
  validates :email,
            presence: true,
            uniqueness: true,
            format: { with: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
  validates :username,
            presence: true,
            uniqueness: true
  validates :password,
            :format: { with: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+\-=+{}[\]\\|;':",.\/<>?]).{8,}/}
end