class AccountsController < ApplicationController
    before_action :authorize!

    def create
        @account = Account.create!(account_params)
        render_as_json @account, status: :created
    end

    def update
        @account = Account.find_by(search_params)
        @account.update(update_params)
        head :no_content
    end

    def index
        @accounts = Account.where(user_id: params[:user_id])
        render_json accounts: @accounts, count: @accounts.count
    end

    def search
        @account = Account.find_by(search_params)
        render_as_json @account
    end

    def resource_owner
        if params[:account_number]
            Account.find_by(account_number: params[:account_number]).user
        elsif params[:user_id]
            User.find(params[:user_id])
        end
    end

    private
    def update_params
        params.permit(:name)
    end

    def account_params
        params.permit(:user_id, :name)
    end

    def search_params
        params.permit(:user_id, :account_number)
    end
end
