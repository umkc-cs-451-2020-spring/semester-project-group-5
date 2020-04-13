class TriggersController < ApplicationController
  before_action :set_trigger, only: [:show, :update, :destroy]

  # GET /triggers/1
  def show
    render json: @trigger, status: :ok
  end

  # POST /triggers
  def create
    @trigger = Trigger.new(trigger_params)
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
    if @trigger.update(trigger_params)
      render json: @trigger
    else
      render json: @trigger.errors, status: :unprocessable_entity
    end
  end

  # DELETE /triggers/1
  def destroy
    @trigger.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trigger
      @trigger = Trigger.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trigger_params
      params.require(:trigger).permit(:id, :trigger_type)
    end
end
