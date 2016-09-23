class PageController < ApplicationController
  def index
  	if current_user
  		redirect_to "/users/#{current_user.id}"
  	end
  end
end
