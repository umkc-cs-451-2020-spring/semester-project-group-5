class TransactionsController < ApplicationController

  def index
    transactions = Transaction.all;
    render json: {status:'SUCCESS', message:'Transactions', transactions: transactions}, status: :ok
  end

  def create
    @transactions = Transaction.create!(transaction_params)
    render json: @transactions, status: :created
  end

  def show
    transactions = Transaction.find(params[:id])
    render json: {message:'Loaded Transaction', transaction: transactions}, status: :ok
  end

  def update
    @transactions = Transaction.find(params[:id])
    @transactions.update!(transaction_params)
    head :no_content
  end

  def search
    @transactions = Transaction.find(params[:id])
    @transactions.destroy!
    head :no_content
  end

  private

  def transaction_params
    params.permit(
      :user_id,
      :amount,
      :account_number,
      :category,
      :description,
      :state,
      :hidden
    )
  end
end
