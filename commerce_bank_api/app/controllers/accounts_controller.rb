class AccountsController < ApplicationController
    before_action :authorize!

    def create
        @account = Account.create!(account_params)
        render_as_json @account, status: :created
    end

    def index
        @accounts = Account.where(user_id: params[:user_id])
        render_json accounts: @accounts, count: @accounts.count
    end

    def show
        @account = Account.find_by(search_params)
        render_as_json @account
    end

    private
    def account_params
        params.permit(:user_id, :name)
    end

    def search_params
        params.permit(:user_id, :account_number)
    end
end
