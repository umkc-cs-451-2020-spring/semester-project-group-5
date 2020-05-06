class TransactionsController < ApplicationController
  before_action :authorize!
  
  def create
    @account = Account.find_by(account_params)
    @transaction = @account.account_transactions.create!(transaction_params)
    render json: @transaction, status: :created
  end

  def show
    transactions = AccountTransaction.find(params[:id])
    render json: {message:'Loaded Transaction', transaction: transactions}, status: :ok
  end

  def update
    @transactions = AccountTransaction.find(params[:id])
    @transactions.update!(update_transaction_params)
    head :no_content
  end

  def csv_index
    @account = Account.find_by(account_params)
    raise ActiveRecord::RecordNotFound unless @account
    @transactions = AccountTransaction.where(account: @account)
    send_data @transactions.to_csv, filename: "#{@account.account_number}-transactions-#{Date.today}.csv"
  end

  def search
    @account = Account.find_by(account_params)
    raise ActiveRecord::RecordNotFound unless @account
    @transactions = AccountTransaction.where(account: @account)
    render_json transactions: @transactions, count: @transactions.count
  end

  def resource_owner
    account = Account.find_by(account_params)
    account.user
  end

  private
  def account_params
    params.permit(:account_number)
  end

  def transaction_params
    params.permit(
      :amount,
      :category,
      :description,
      :state,
      :hidden,
      :transaction_type
    )
  end

  def update_transaction_params
    params.permit(:category, :hidden)
  end


end
