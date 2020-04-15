class Account < ApplicationRecord
    belongs_to :user
    has_many :triggered_events
    has_many :account_transactions
    has_many :triggers
    has_many :triggered_events
    before_create :set_account_number

    # Set the limit for the account number variable
    ACCOUNT_NUMBER_LIMIT = 1_000_000_000

    # Accounts cannot contain more than $1,000,000
    validates_numericality_of :balance,
        greater_than_or_equal_to: 0,
        less_than_or_equal_to: 1_000_000

    # Account name should be unique with respect to the user
    validates :name, presence: true, uniqueness: { scope: :user }

    private
    def set_account_number
        self.account_number = generate_account_number
    end

    def generate_account_number
        loop do
            account_num = SecureRandom.random_number(ACCOUNT_NUMBER_LIMIT)
            break account_num unless Account.where(account_number: account_num).exists?
        end
    end
end
