class TriggeredEventsController < ApplicationController
    before_action :find_triggered_event, only: [:show]

    def create
        @triggered_event = TriggeredEvent.create!(triggered_event_params)
        render json: @triggered_event, status: :created
      end

    def index
        triggered_events = TriggeredEvent.all
        render json: {status:'SUCCESS', message:'Loaded Triggered Events', events: triggered_events}, status: :ok
    end

    def show
        render json: @triggered_event, status: :ok
    end

    private
    def find_triggered_event
        @triggered_event= TriggeredEvent.find(params[:id])
    end

    def triggered_event_params
        params.permit(:event_type)
    end
end
