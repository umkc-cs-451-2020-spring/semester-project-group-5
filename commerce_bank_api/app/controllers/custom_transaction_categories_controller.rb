class CustomTransactionCategoriesController < ApplicationController
    before_action :authorize!

    def create
        @category = CustomTransactionCategory.create!(create_category_params)
        render_as_json @category, status: :created
    end

    def index
        @categories = CustomTransactionCategory.where(user_id: params[:user_id])
        render_json categories: @categories, count: @categories.count
    end

    def destroy
        @category = CustomTransactionCategory.find(params[:id])
        @category.delete
        head :no_content
    end

    def resource_owner
        if params[:id]
            CustomTransactionCategory.find(params[:id]).user
        elsif params[:user_id]
            User.find(params[:user_id])
        end
    end
    private
    def create_category_params
        params.permit(:user_id, :category)
    end
end
