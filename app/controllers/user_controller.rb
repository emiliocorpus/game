class UserController < ApplicationController
  def create
  	if request.xhr?
	    new_user = User.new(email:params["email"], password: params["password"])
	    if new_user.save
	    	sign_in new_user
	    	redirect_to root_path
	    else
	    	render :json => {errors: new_user.errors}
	    end
  	else
  		redirect_to root_path
 	end

  end

  def show

  end

  def guest
  	if request.xhr?
  		@guest = User.find_by(email:"guest@guest.com")
  		sign_in_and_redirect @guest
    else
  		redirect_to root_path
  	end
  end


end
