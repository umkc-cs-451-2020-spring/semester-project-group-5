class TransactionsController < ApplicationController

  def index
    transactions = Transaction.order('created_at DESC');
    render json: {status:'SUCCESS', message:'Loaded Transactions', data: transactions}, status: :ok
  end

  def create
    @transactions = Transaction.create!(transaction_params)
    render json: @transactions, status: :created
  end

  def show
    transactions = Transaction.find(params[:transaction_id])
    render json: {message:'Loaded Transaction', data: transactions}, status: :ok
  end

  def update
    @transactions = Transaction.find(params[:id])
    @transactions.update!(transaction_params)
    head :no_content
  end

  def search
    @transactions.destroy!
    head :no_content
  end

  private
  def find_transaction
    @transactions = Transaction.find(params[:transaction_id])
  end

  def transaction_params
    params.permit(
      :transaction_id,
      :amount,
      :account_number,
      :category,
      :description,
      :state,
      :hidden, #??
      :timestamps
    )
  end
end
