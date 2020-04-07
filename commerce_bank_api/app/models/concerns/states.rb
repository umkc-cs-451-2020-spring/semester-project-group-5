module States
  extend ActiveSupport::Concern

  included do
    before_validation :upcase_state
    validates :state,
    presence: true,
    inclusion: { in: :us_states, message: "%{value} is not a valid state" }
  end

  def us_states
    [
      'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL',
      'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE',
      'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
      'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
    ]
  end

  def upcase_state
    self.state.upcase!
  end
end