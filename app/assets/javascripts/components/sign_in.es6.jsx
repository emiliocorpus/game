class SignIn extends React.Component {

  handleLogIn (e) {
  	e.preventDefault()
    $.ajax({
      url: '/users/create',
      type: 'POST',
      dataType: 'json',
      data: {email: this.refs.email.value, password: this.refs.password.value, confirm_password:this.refs.confirmPassword.value},
    })
    .done(function(response) {
      debugger
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }


  render () {
    return (
    	<div className="body-splash">

    		<div className="sign-in-up-container sign-in-container">
	    		<form onSubmit={this.handleLogIn}>
	    			<div className="form-group">
	    			    <label htmlFor="username">Email</label>
	    			    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref="email" />
	    			 
				    </div>
	    			  
	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Password</label>
	    			    <input type="password" className="form-control" id="passwordinput" placeholder="password" ref="password"/>
	    			</div>

	    			<button type="submit" className="btn btn-primary">Log In</button>

	    		</form>
    		</div>

        <div>
          <a href="/users/auth/facebook">Sign In With Facebook Here</a>
        </div>

    		<div>
    			<span>
    				<a href="signup" onClick={this.props.signUp}>Not A User? Sign Up Here</a>
    			</span>
    		</div>

        <div>

          <span>

            <a href="/sign_in_as_guest">Sign In As Guest</a>

          </span>

        </div>
    	</div>
    );
  }
}

