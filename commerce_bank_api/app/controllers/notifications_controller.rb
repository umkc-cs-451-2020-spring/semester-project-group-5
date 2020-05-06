class NotificationsController < ApplicationController
    before_action :authorize!
    before_action :find_notification, only: [:show, :update]

    def show
        render_as_json @notification
    end

    def index
        @notifications = Notification.where(notification_index_params)
        render_json notifications: @notifications, count: @notifications.count
    end

    # The only attribute that is allowed to be updated after creation is the read? field
    def update
        @notification.update(notification_update_params)
        head :no_content
    end

    def resource_owner
        if params[:id]
            Notification.find(params[:id]).user
        elsif params[:user_id]
            User.find(params[:user_id])
        end
    end
    private
    def notification_index_params
        params.permit(:user_id, :read)
    end

    def find_notification
        @notification = Notification.find(params[:id])
    end

    def notification_update_params
        params.permit(:read)
    end
end
