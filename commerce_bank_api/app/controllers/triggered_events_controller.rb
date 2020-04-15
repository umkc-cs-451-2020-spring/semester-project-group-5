class TriggeredEventsController < ApplicationController
    before_action :find_triggered_event, only: [:show]

    def index
        @account = Account.find_by(account_params)
        @triggered_events = TriggeredEvent.where(account: @account)
        render_json triggered_events: @triggered_events, count: @triggered_events.count
    end

    def show
        render json: @triggered_event, status: :ok
    end

    private
    def account_params
        params.permit(:account_number)
    end

    def find_triggered_event
        @triggered_event= TriggeredEvent.find(params[:id])
    end

    def triggered_event_params
        params.permit(:event_type)
    end
end
