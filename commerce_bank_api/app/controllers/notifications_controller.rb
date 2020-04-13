class NotificationsController < ApplicationController
    before_action :authorize!
    before_action :find_notification, only: [:show, :update]

    def show
        render_as_json @notification
    end

    def index
        @notifications = Notification.where(user_id: params[:user_id])
        render_json notifications: @notifications, count: @notifications.count
    end

    # The only attribute that is allowed to be updated after creation is the read? field
    def update
        @notification.update(notification_update_params)
        head :no_content
    end

    private
    def find_notification
        @notification = Notification.find(params[:id])
    end

    def notification_update_params
        params.permit(:read)
    end
end
