class TriggeredEventsController < ApplicationController

    before_action :find_triggered_event, only: [:show, :update, :destroy]

    def create
        @triggered_event = Triggered_event.create!(triggered_event_params)
        render json: @user, status: :created
      end

    def index
        triggered_events=Triggered_event.order('created_at DESC')
        render json: {status:'SUCCESS', message:'Loaded Triggered Events', data: triggered_events}, status: :ok
    end

    def show
        triggered_events=Triggered_event.find(params[:id])
        render json: @triggered_event, status: :ok
    end

    def update
        @triggered_event.update!(triggered_event_params)
        head :no_content    
    end
    

    def destroy
        @triggered_event.destroy!
        head : no_content
    end

    private
    def find_triggered_event
        @triggered_event= Triggered_event.find(params[:id])
    end

    def triggered_event_params
        params.permit(
            :account_number,
            :transaction_id,
            :event_type,
        )
    end

end
