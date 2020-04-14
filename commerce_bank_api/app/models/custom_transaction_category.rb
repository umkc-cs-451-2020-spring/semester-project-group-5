class CustomTransactionCategory < ApplicationRecord
    belongs_to :user
    before_validation :lowercase_category
    validates :category, presence: true, uniqueness: { scope: :user }

    def lowercase_category
        self.category.downcase!
    end
end
