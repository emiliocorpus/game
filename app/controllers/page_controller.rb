class PageController < ApplicationController
  def index
  	if current_user
  		@user = current_user
  		redirect_to @user
  	end
  end
end
