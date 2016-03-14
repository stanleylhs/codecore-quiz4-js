class LikesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @company = Company.find params[:company_id]
    like = Like.new(company: @company)
    if like.save
      head :created
    else
      head :internal_server_error
    end
  end

  def destroy
    @company    = Company.find params[:company_id]
    like = Like.find params[:id]
    like.destroy
    head :ok
  end
end
