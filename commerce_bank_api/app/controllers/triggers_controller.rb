class TriggersController < ApplicationController
  before_action :authorize!
  before_action :set_trigger, only: [:show, :update, :destroy]

  # GET /triggers/1
  def show
    render json: @trigger, status: :ok
  end

  # POST /triggers
  def create
    @account = Account.find_by(account_params)
    @trigger = @account.triggers.new(trigger_params)
    #trigger = Trigger.create(trigger_params)
    #if @trigger
    if @trigger.save
      render json: @trigger, status: :created
    else
      render json: @trigger.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /triggers/1
  def update
    if @trigger.update(bound: params[:bound])
      render json: @trigger
    else
      render json: @trigger.errors, status: :unprocessable_entity
    end
  end

  # DELETE /triggers/1
  def destroy
    @trigger.destroy
  end

  def index
    @account = Account.find_by(account_params)
    @triggers = Trigger.where(account: @account)
    render_json triggers: @triggers, count: @triggers.count
  end

  def resource_owner
    account = Account.find_by(account_params)
    account.user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trigger
      @trigger = Trigger.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trigger_params
      params.permit(:id, :trigger_type, :bound)
    end

    def account_params
      params.permit(:account_number)
    end
end
